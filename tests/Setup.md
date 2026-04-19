# Set up

node --version
npm --version

to install PLAYWRIGHT and dependcies
npm init playwright@latest
select typescript

to RUN:
npx playwright test tests/<filename> 

to see REPORT
npx playwright show-report

Install extention :
Playwright Test for VS code

# Debug in headed mode
npx playwright test <folde/filename> --headed --debug

# Run all tests
npx playwright test

# Run specific file
npx playwright test tests/login.spec.ts

# Run tests with specific browser
npx playwright test --project=chromium

# Run in headed mode
npx playwright test --headed

# Run in debug mode
npx playwright test --debug

# Run with UI mode
npx playwright test --ui

# Show report
npx playwright show-report