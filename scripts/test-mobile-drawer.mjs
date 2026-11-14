import puppeteer from 'puppeteer-core';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });

  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => {
    sessionStorage.setItem("clearnyx_preloader_seen", "true");
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  const btn = await page.$('button[aria-label="Open menu"]');
  if (btn) {
    await btn.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: "mobile-audit-shots/mobile-drawer.png" });
    console.log("Captured mobile drawer");
  }

  await browser.close();
})();
