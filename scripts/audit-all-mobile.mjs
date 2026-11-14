import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUTPUT_DIR = path.resolve("./mobile-audit-shots");

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
  await new Promise(r => setTimeout(r, 600));

  const sections = [
    { name: "hero", sel: "#top" },
    { name: "benefits", sel: ".lp-benefits-strip" },
    { name: "conditions", sel: "#conditions" },
    { name: "steps", sel: "#how-it-works" },
    { name: "lifestyle", sel: "#built-for-life" },
    { name: "stats", sel: ".lp-stats" },
    { name: "results", sel: "#results" },
    { name: "testimonials", sel: "#testimonials" },
    { name: "faq", sel: "#faq" },
  ];

  for (const s of sections) {
    const el = await page.$(s.sel);
    if (el) {
      await el.screenshot({ path: path.join(OUTPUT_DIR, `sec-${s.name}-375.png`) });
      console.log(`Captured sec-${s.name}-375.png`);
    } else {
      console.log(`Could not find ${s.sel}`);
    }
  }

  // Also check mobile menu
  const menuBtn = await page.$('button[aria-label="Open navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `sec-mobile-menu-375.png`) });
  }

  console.log("All sections captured!");
  await browser.close();
})();
