# Shadow DOM SelectorHub Project

## Overview
This project contains a Playwright test that demonstrates how to interact with Shadow DOM elements on the SelectorHub practice page. It is part of a Playwright automation learning repository and highlights handling both open and closed Shadow DOM elements.

## Project Goal
- Navigate to the SelectorHub XPath practice page.
- Fill form fields inside Shadow DOM elements.
- Use direct locators for open Shadow DOM fields.
- Use keyboard navigation as a workaround when interacting with closed Shadow DOM fields.

## Test File
- `Fill_Shadow_DOM_Form.spec.ts`

## Screenshot
- `ShadowDOM_Report.png` — a supporting image for the Shadow DOM test or report.
![alt text](<ShadowDOM_Report.png>)

## Prerequisites
- Node.js installed (recommended version: 18+)
- Project dependencies installed using npm
- Playwright browser binaries installed

## Setup
From the repository root, run:
```bash
npm install
npx playwright install
```

## Running the Test
Run the Shadow DOM test from the root directory:
```bash
npx playwright test tests/Projects/Project_9_Shadow_DOM_SelectorHub/Fill_Shadow_DOM_Form.spec.ts
```

## What This Test Covers
- `page.goto('https://selectorshub.com/xpath-practice-page')`
- Filling the open Shadow DOM fields using CSS selectors:
  - Username field: `#kils`
  - Pizza field: `#pizza`
- Demonstrating that closed Shadow DOM fields cannot be located directly:
  - Concept field
  - Password field
- Using keyboard interaction to fill fields when direct access is not available.

## Notes
- Shadow DOM behavior may vary with page updates.
- Closed Shadow DOM cannot be automated directly with standard locators; keyboard-based workarounds are shown in this test.
- This test is intended for learning and demonstration purposes.

## Recommended Improvements
- Add assertions to verify the values after filling the form.
- Use explicit waits instead of `waitForTimeout` for more stable execution.
- Add error handling for page navigation or locator failures.
- Enhance the test with data-driven inputs and cross-browser execution.

## Folder Structure
```
Project_9_Shadow_DOM_SelectorHub/
  ├── Fill_Shadow_DOM_Form.spec.ts
  ├── ShadowDOM_Report.png
  └── README.md
```
