import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUTPUT_DIR = path.resolve("./visual-audit-shots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

(async () => {
  console.log("Launching Edge for Cinematic Preloader and Page Transition test...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Clear sessionStorage before test
  await page.goto("about:blank");

  console.log("Navigating to http://localhost:3000 to capture preloader...");
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });

  // 1. Capture early preloader phase
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "preloader-phase-1.png") });
  console.log("Captured preloader-phase-1.png");

  // 2. Capture mid-to-high calibration phase
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "preloader-phase-2.png") });
  console.log("Captured preloader-phase-2.png");

  // 3. Capture shutter exit / reveal phase
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "preloader-phase-3-split.png") });
  console.log("Captured preloader-phase-3-split.png");

  // 4. Capture revealed homepage
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "preloader-complete-home.png") });
  console.log("Captured preloader-complete-home.png");

  // 5. Test page switching animation by clicking a nav link
  console.log("Testing page transition by clicking 'Solutions' or navigating...");
  // Click solutions link in header
  const solutionsLink = await page.$('a[href="/solutions"]');
  if (solutionsLink) {
    await solutionsLink.click();
    // Capture mid-transition
    await new Promise(r => setTimeout(r, 120));
    await page.screenshot({ path: path.join(OUTPUT_DIR, "page-transition-mid.png") });
    console.log("Captured page-transition-mid.png");

    // Capture settled solutions page
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(OUTPUT_DIR, "page-transition-solutions.png") });
    console.log("Captured page-transition-solutions.png");
  }

  console.log("Test finished successfully!");
  await browser.close();
})();
