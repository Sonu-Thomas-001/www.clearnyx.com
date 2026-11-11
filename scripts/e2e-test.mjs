import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = path.resolve("./e2e-screenshots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: "mobile-xs-320", width: 320, height: 568 },
  { name: "mobile-sm-360", width: 360, height: 740 },
  { name: "mobile-md-375", width: 375, height: 667 },
  { name: "mobile-lg-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1024", width: 1024, height: 768 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const PAGES = [
  "/",
  "/about",
  "/solutions",
  "/solutions/standard-aligners",
  "/solutions/multi-layer-aligners",
  "/technology",
  "/how-it-works",
  "/for-dentists",
  "/become-a-partner",
  "/contact",
];

async function run() {
  console.log("Launching Edge browser for E2E Responsive & Style Testing...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  const issues = [];
  const consoleErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(`[Console Error] ${msg.text()}`);
    }
  });

  page.on("pageerror", (err) => {
    consoleErrors.push(`[Page Error] ${err.message}`);
  });

  for (const pagePath of PAGES) {
    const url = `${BASE_URL}${pagePath}`;
    console.log(`\n========================================`);
    console.log(`Testing Page: ${pagePath} (${url})`);
    console.log(`========================================`);

    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
      } catch (e) {
        // Fallback to load
        await page.goto(url, { waitUntil: "load", timeout: 10000 });
      }

      // Allow fonts and animations to settle
      await new Promise((r) => setTimeout(r, 400));

      // 1. Check for Horizontal Overflow
      const overflowDetails = await page.evaluate((vpWidth) => {
        const docScrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body.scrollWidth;
        const windowWidth = window.innerWidth;
        const isOverflow = docScrollWidth > windowWidth || bodyScrollWidth > windowWidth;

        let offending = [];
        if (isOverflow) {
          const all = document.querySelectorAll("*");
          for (const el of all) {
            const rect = el.getBoundingClientRect();
            if (rect.right > windowWidth + 2) {
              offending.push({
                tag: el.tagName.toLowerCase(),
                id: el.id,
                className: el.className?.toString().slice(0, 100) || "",
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                overflowAmount: Math.round(rect.right - windowWidth),
              });
            }
          }
        }
        return {
          windowWidth,
          docScrollWidth,
          bodyScrollWidth,
          isOverflow,
          offendingCount: offending.length,
          topOffenders: offending.slice(0, 5),
        };
      }, vp.width);

      if (overflowDetails.isOverflow) {
        const issue = {
          page: pagePath,
          viewport: vp.name,
          windowWidth: vp.width,
          scrollWidth: Math.max(overflowDetails.docScrollWidth, overflowDetails.bodyScrollWidth),
          offenders: overflowDetails.topOffenders,
        };
        issues.push(issue);
        console.error(
          `❌ OVERFLOW DETECTED on ${pagePath} at ${vp.name} (${vp.width}px): scrollWidth=${issue.scrollWidth}px (overflow: +${issue.scrollWidth - vp.width}px)`
        );
        console.error("  Top offenders:", JSON.stringify(issue.offenders, null, 2));
      } else {
        console.log(`  ✓ ${vp.name} (${vp.width}px): Clean (scrollWidth: ${overflowDetails.docScrollWidth}px)`);
      }

      // Check Header specifically on 320, 375, 1024, 1280
      if (["mobile-xs-320", "laptop-1024", "desktop-1280"].includes(vp.name) && pagePath === "/") {
        const headerCheck = await page.evaluate(() => {
          const header = document.querySelector("header > div");
          if (!header) return null;
          const rect = header.getBoundingClientRect();
          const btns = Array.from(header.querySelectorAll("button, a"));
          const visibleBtns = btns.filter(b => b.offsetParent !== null && b.getBoundingClientRect().width > 0);
          const overflowingBtns = visibleBtns.filter(b => {
            const bRect = b.getBoundingClientRect();
            return bRect.right > rect.right + 2 || bRect.left < rect.left - 2;
          }).map(b => ({
            text: b.innerText?.slice(0, 30),
            class: b.className?.slice(0, 60),
            btnRight: Math.round(b.getBoundingClientRect().right),
            headerRight: Math.round(rect.right)
          }));
          return {
            headerWidth: Math.round(rect.width),
            headerRight: Math.round(rect.right),
            windowWidth: window.innerWidth,
            overflowingBtns
          };
        });
        if (headerCheck && headerCheck.overflowingBtns.length > 0) {
          console.error(`❌ HEADER BUTTON OVERFLOW at ${vp.name}:`, headerCheck);
          issues.push({
            page: pagePath,
            viewport: vp.name,
            type: "HEADER_BUTTON_OVERFLOW",
            details: headerCheck
          });
        }
      }

      // Take screenshots for visual inspection on key viewports
      if (["mobile-xs-320", "mobile-md-375", "tablet-768", "desktop-1280"].includes(vp.name) && (pagePath === "/" || pagePath === "/about")) {
        const safePageName = pagePath === "/" ? "home" : pagePath.replace(/\//g, "-");
        const filename = `${safePageName}-${vp.name}.png`;
        await page.screenshot({ path: path.join(OUTPUT_DIR, filename), fullPage: false });
      }
    }
  }

  // 3. Test Mobile Navigation Drawer
  console.log(`\n========================================`);
  console.log("Testing Mobile Hamburger & Drawer Functionality...");
  console.log(`========================================`);
  await page.setViewport({ width: 375, height: 667 });
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });

  const hamburger = await page.$('header button[aria-label="Open menu"]');
  if (hamburger) {
    console.log("Found hamburger menu button. Clicking to open drawer...");
    await hamburger.click();
    await new Promise((r) => setTimeout(r, 500));
    const drawerVisible = await page.evaluate(() => {
      const drawer = document.querySelector(".fixed.inset-x-3");
      return !!drawer;
    });
    console.log("Mobile drawer visible:", drawerVisible);
    await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-drawer-open.png") });

    const closeBtn = await page.$('header button[aria-label="Close menu"], .fixed.inset-x-3 button');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise((r) => setTimeout(r, 400));
      console.log("Closed mobile drawer successfully.");
    }
  } else {
    console.warn("Hamburger button not found on 375px viewport.");
  }

  // 4. Test Book Modal
  console.log(`\n========================================`);
  console.log("Testing Book Consultation Modal...");
  console.log(`========================================`);
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });

  const modalTrigger = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const bookBtn = btns.find(b => b.innerText && b.innerText.includes("Book Consultation"));
    if (bookBtn) {
      bookBtn.click();
      return true;
    }
    return false;
  });

  if (modalTrigger) {
    await new Promise((r) => setTimeout(r, 600));
    const modalVisible = await page.evaluate(() => {
      const modal = document.querySelector('[role="dialog"], .fixed.inset-0.z-\\[9999\\], .fixed.inset-0');
      return !!modal;
    });
    console.log("Consultation modal opened:", modalVisible);
    await page.screenshot({ path: path.join(OUTPUT_DIR, "consultation-modal.png") });
  }

  await browser.close();

  console.log(`\n========================================`);
  console.log("TEST SUMMARY");
  console.log(`========================================`);
  console.log(`Total Horizontal Overflow Issues: ${issues.length}`);
  console.log(`Total Console / Page Errors: ${consoleErrors.length}`);

  if (consoleErrors.length > 0) {
    console.log("\nConsole Errors:");
    consoleErrors.forEach((e) => console.log(e));
  }

  if (issues.length > 0) {
    console.log("\nDetailed Overflow Issues:");
    console.log(JSON.stringify(issues, null, 2));
    process.exit(1);
  } else {
    console.log("\n🎉 ALL PAGES AND VIEWPORTS PASSED WITH ZERO OVERFLOW ISSUES!");
    process.exit(0);
  }
}

run().catch((err) => {
  console.error("Test runner encountered an error:", err);
  process.exit(1);
});
