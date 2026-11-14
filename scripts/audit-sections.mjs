import puppeteer from 'puppeteer-core';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Hero
  const hero = await page.$('section.lp-hero');
  if (hero) await hero.screenshot({ path: 'visual-audit-shots/current-hero.png' });

  // 2. Benefits marquee
  const benefits = await page.$('.lp-benefits-strip');
  if (benefits) await benefits.screenshot({ path: 'visual-audit-shots/current-benefits.png' });

  // 3. Conditions
  const conditions = await page.$('#treatable-cases');
  if (conditions) await conditions.screenshot({ path: 'visual-audit-shots/current-conditions.png' });

  // 4. How it works
  const how = await page.$('#how-it-works');
  if (how) await how.screenshot({ path: 'visual-audit-shots/current-how-it-works.png' });

  console.log('Captured all current sections successfully');
  await browser.close();
})();
