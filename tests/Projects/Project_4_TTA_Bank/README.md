
# Project #4 - TTA Bank Money Withdraw

> Playwright test for validating bank withdrawal behavior, built as part of the Playwright Fundamentals with TypeScript course.

---

## 📌 Test File

- `Project#4_TTA_Bank_Money_Withdraw.spec.ts`

This test belongs to the **TTA Bank** project suite and verifies the withdrawal flow for the target bank application.

---

## 🚀 What this folder contains

- `Project#4_TTA_Bank_Money_Withdraw.spec.ts`
- `README.md`
- `Custom Report.png` (screenshot of the TTA report)

---

## 🧪 Run the Test

From the project root:

```bash
npx playwright test tests/Projects/Project#4_TTA_Bank/Project#4_TTA_Bank_Money_Withdraw.spec.ts
```

Or run the entire test suite:

```bash
npx playwright test
```

---

## 📊 Custom TTA Report

This repository uses a custom HTML reporter:

- CustomTTAReporter.ts

It is configured in playwright.config.ts and automatically generates the TTA report after execution.

### Generated report location

- `tta-report/report_YYYYMMDD_HHMMSS.html`
- index.html → redirects to the latest report
- history.html → all historical reports

### Open the latest report

On macOS:

```bash
open tta-report/index.html
```
On Chrome:
```bash
open -a "Google Chrome" tta-report/index.html
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

## 🖼️ Custom Report Sample


![alt text](<Custom Report.png>)
---

## 🛠️ Notes

- If you add more tests to this folder, the custom report will aggregate them automatically.
- The report updates in real-time during execution.
- Keep CustomTTAReporter.ts in the project root and ensure playwright.config.ts includes it under `reporter`.

---

## 💡 Tips

- Use `npx playwright show-report` if you want the built-in Playwright report in addition to the TTA report.
- If the report does not appear, confirm the tta-report folder exists and that `CustomTTAReporter` is active in playwright.config.ts.

---

## 🧾 Author

- Created by Meeti Jha
- Built with Playwright + TypeScript
