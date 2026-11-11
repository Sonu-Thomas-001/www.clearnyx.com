import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = path.resolve("./visual-audit-shots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  const viewports = [
    { name: "desktop-1920", width: 1920, height: 1080 },
    { name: "desktop-1440", width: 1440, height: 900 },
    { name: "desktop-1280", width: 1280, height: 800 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "mobile-375", width: 375, height: 812 },
    { name: "mobile-320", width: 320, height: 568 },
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 600));

    // Full page screenshot
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `full-home-${vp.name}.png`),
      fullPage: true,
    });

    // Viewport screenshot (Header + Hero)
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `header-hero-${vp.name}.png`),
      fullPage: false,
    });
  }

  // Also capture Solutions, About, Contact
  for (const p of ["/about", "/solutions", "/for-dentists", "/contact"]) {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${BASE_URL}${p}`, { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 400));
    const safeName = p.replace(/\//g, "-").replace(/^-/, "");
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `page-${safeName}-1280.png`),
      fullPage: false,
    });
  }

  await browser.close();
  console.log("Visual audit screenshots generated in ./visual-audit-shots");
}

run().catch(console.error);
