import puppeteer from 'puppeteer-core';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUTPUT_DIR = path.resolve("./visual-audit-shots");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto("about:blank");
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });

  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "preloader-mobile-375.png") });
  console.log("Captured preloader-mobile-375.png");

  await browser.close();
})();
