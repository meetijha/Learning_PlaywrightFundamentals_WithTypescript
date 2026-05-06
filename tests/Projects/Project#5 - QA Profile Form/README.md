# Project #5 - QA Profile Form

> Playwright test for validating a comprehensive QA profile form, including personal info, professional details, file operations, and tab navigation. Built as part of the Playwright Fundamentals with TypeScript course.

---

## 📌 Test File

- `QA_Profile_Form.spec.ts`

This test belongs to the **QA Profile Form** project suite and verifies the end-to-end flow of filling out a QA profile form on The Testing Academy's practice page.

---

## 🚀 What this folder contains

- `QA_Profile_Form.spec.ts` - Main Playwright test file
- `sample-upload.txt` - Sample file for upload testing
- `Downloads/sample-download.txt` - Placeholder for downloaded file
- `README.md` - This documentation

---

## 🧪 Run the Test

From the project root:

```bash
npx playwright test tests/Projects/Project#5\ -\ QA\ Profile\ Form/QA_Profile_Form.spec.ts
```

Or run the entire test suite:

```bash
npx playwright test
```

---

## 📊 Custom TTA Report

This repository uses a custom HTML reporter:

- `CustomTTAReporter.ts`

It is configured in `playwright.config.ts` and automatically generates the TTA report after execution.

### Generated report location

- `tta-report/report_YYYYMMDD_HHMMSS.html`
- `tta-report/index.html` → redirects to the latest report
- `tta-report/history.html` → all historical reports

### Open the latest report

On macOS:

```bash
open index.html
```

---

## ✨ What the custom report includes

- test status summary
- pass / fail / skipped counters
- environment, browser, platform, run ID
- test list with details
- screenshots
- videos
- trace links
- step-level details
- console logs
- error and stack trace information

---

## 🖼️ Custom Report Screenshot

![alt text](<CustomReport.png>)

---

## 🛠️ Notes

- The test covers form filling, checkbox/radio selections, date input, file upload/download, and tab switching.
- Ensure the `sample-upload.txt` file exists for upload testing.
- The download saves to the `Downloads/` subfolder.
- If you add more tests to this folder, the custom report will aggregate them automatically.
- The report updates in real-time during execution.
- Keep `CustomTTAReporter.ts` in the project root and ensure `playwright.config.ts` includes it under `reporter`.

---

## 💡 Tips

- Use `npx playwright show-report` if you want the built-in Playwright report in addition to the TTA report.
- If the report does not appear, confirm the `tta-report/` folder exists and that `CustomTTAReporter` is active in `playwright.config.ts`.
- Run with `--headed` to see the browser actions visually.

---

## 🧾 Author

- Created by Meeti Jha
- Built with Playwright + TypeScript
```