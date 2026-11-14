import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUTPUT_DIR = path.resolve("./mobile-audit-shots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: "320-xs", width: 320, height: 600 },
  { name: "375-sm", width: 375, height: 812 },
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  for (const vp of VIEWPORTS) {
    console.log(`Auditing viewport ${vp.name}...`);
    await page.setViewport({ width: vp.width, height: vp.height, isMobile: true, hasTouch: true });
    
    await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => {
      sessionStorage.setItem("clearnyx_preloader_seen", "true");
    });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
    await new Promise(r => setTimeout(r, 600));

    // 1. Hero
    const hero = await page.$("#top");
    if (hero) await hero.screenshot({ path: path.join(OUTPUT_DIR, `hero-${vp.name}.png`) });

    // 2. Conditions
    const conditions = await page.$("#conditions");
    if (conditions) await conditions.screenshot({ path: path.join(OUTPUT_DIR, `conditions-${vp.name}.png`) });

    // 3. Steps
    const steps = await page.$("#how-it-works");
    if (steps) await steps.screenshot({ path: path.join(OUTPUT_DIR, `steps-${vp.name}.png`) });

    // 4. Lifestyle Orbit
    const lifestyle = await page.$("#lifestyle-orbit");
    if (lifestyle) await lifestyle.screenshot({ path: path.join(OUTPUT_DIR, `lifestyle-${vp.name}.png`) });

    // 5. Testimonials
    const testimonials = await page.$("#testimonials");
    if (testimonials) await testimonials.screenshot({ path: path.join(OUTPUT_DIR, `testimonials-${vp.name}.png`) });

    // 6. FAQ & CTA
    const faq = await page.$("#faq");
    if (faq) await faq.screenshot({ path: path.join(OUTPUT_DIR, `faq-${vp.name}.png`) });

    // 7. Footer
    const footer = await page.$("footer");
    if (footer) await footer.screenshot({ path: path.join(OUTPUT_DIR, `footer-${vp.name}.png`) });

    // 8. Mobile Menu Drawer Open
    const menuBtn = await page.$('button[aria-label="Open navigation menu"]');
    if (menuBtn) {
      await menuBtn.click();
      await new Promise(r => setTimeout(r, 350));
      await page.screenshot({ path: path.join(OUTPUT_DIR, `menu-open-${vp.name}.png`) });
      // close menu
      const closeBtn = await page.$('button[aria-label="Close menu"]');
      if (closeBtn) await closeBtn.click();
      await new Promise(r => setTimeout(r, 250));
    }
  }

  console.log("Captured all section screenshots successfully!");
  await browser.close();
})();
