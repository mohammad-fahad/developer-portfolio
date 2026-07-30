const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SOURCE_DIR = "D:\\Mohammad\\school-saas-v2\\branding\\screenshots";
const OUTPUT_DIR = "d:\\Mohammad\\Developer-Portfolio\\public\\images\\work\\eduflow\\screenshots";

const SCREENSHOTS = [
  { file: "01-login.png", name: "login", quality: 80 },
  { file: "02-landing-page.png", name: "landing-page", quality: 80 },
  { file: "03-owner-dashboard.png", name: "owner-dashboard", quality: 85 },
  { file: "04-attendance-module.png", name: "attendance-module", quality: 85 },
  { file: "05-student-management.png", name: "student-management", quality: 85 },
  { file: "06-fee-collection.png", name: "fee-collection", quality: 85 },
  { file: "07-notice-board.png", name: "notice-board", quality: 80 },
  { file: "08-analytics-reports.png", name: "analytics-reports", quality: 85 },
  { file: "09-finance-module.png", name: "finance-module", quality: 85 },
  { file: "10-teacher-management.png", name: "teacher-management", quality: 80 },
  { file: "11-branch-admin.png", name: "branch-admin", quality: 85 },
  { file: "12-late-fee-config.png", name: "late-fee-config", quality: 80 },
  { file: "13-institution-settings.png", name: "institution-settings", quality: 80 },
  { file: "14-mobile-dashboard.png", name: "mobile-dashboard", quality: 80 },
  { file: "15-mobile-attendance.png", name: "mobile-attendance", quality: 80 },
];

async function convertAll() {
  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const screenshot of SCREENSHOTS) {
    const inputPath = path.join(SOURCE_DIR, screenshot.file);
    const outputPath = path.join(OUTPUT_DIR, `${screenshot.name}.webp`);

    if (!fs.existsSync(inputPath)) {
      console.error(`❌ Source not found: ${inputPath}`);
      continue;
    }

    const inputStat = fs.statSync(inputPath);
    const inputSizeKB = (inputStat.size / 1024).toFixed(1);

    try {
      await sharp(inputPath)
        .webp({ quality: screenshot.quality, effort: 6 })
        .toFile(outputPath);

      const outputStat = fs.statSync(outputPath);
      const outputSizeKB = (outputStat.size / 1024).toFixed(1);
      const reduction = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);

      console.log(
        `✅ ${screenshot.name}.webp — ${inputSizeKB}KB → ${outputSizeKB}KB (${reduction}% reduction)`
      );
    } catch (err) {
      console.error(`❌ Failed to convert ${screenshot.file}: ${err.message}`);
    }
  }

  console.log("\n🎉 All screenshots converted!");
}

convertAll();