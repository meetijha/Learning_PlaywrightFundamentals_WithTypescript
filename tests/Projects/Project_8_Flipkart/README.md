# Flipkart Mac Mini Price Validation Project

## Overview
This project contains a Playwright end-to-end test case that verifies the cheapest Apple Mac Mini listing on Flipkart. It is part of a Playwright learning repository focused on practicing automation using TypeScript.

## Project Goal
- Open Flipkart.
- Search for `Mac Mini`.
- Identify the cheapest Mac Mini product from the search results.
- Log the product name and price to the console.

## Test File
- `Cheapest_Macmimi_On_Flipkart.spec.ts`

## Screenshot
- `CheapestMacMini.png` — a supporting screenshot image for the test or report.
![alt text](<CheapestMacMini.png>)

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
Run the Flipkart test using Playwright from the root directory:
```bash
npx playwright test tests/Projects/Project_8_Flipkart/Cheapest_Macmimi_On_Flipkart.spec.ts
```

## Expected Behavior
The test should:
- Launch a Chromium browser.
- Navigate to Flipkart.
- Perform a search for Mac Mini.
- Determine the cheapest listing and output the product name and price.
- Complete successfully when the cheapest Mac Mini listing is located.

## Notes
- The test is intended for learning and demonstration purposes.
- Flipkart site layout may change over time; selectors may need updates if the page structure changes.
- If the page prompts for login or displays a modal, the test may require additional handling.

## Recommended Enhancements
- Add assertions to verify price and product title format.
- Parameterize the search keyword and browser type.
- Add retries or stable wait conditions for dynamically loaded content.
- Integrate with Allure or Playwright HTML report generation.

## Folder Structure
```
Project_8_Flipkart/
  ├── CheapestMacMini.png
  ├── Cheapest_Macmimi_On_Flipkart.spec.ts
  └── README.md
```
