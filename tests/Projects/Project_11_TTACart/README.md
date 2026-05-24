# 🛒 TTA Cart E2E Test Automation Suite

A comprehensive end-to-end test automation suite for the **TTA Cart** web application, built with [Playwright](https://playwright.dev/) and TypeScript. This project showcases industry best practices including the **Page Object Model (POM)** design pattern, environment-based configuration, Allure reporting integration, and complete test coverage for critical user workflows.

### Key Highlights
- ✅ Fully automated CRUD operations testing
- ✅ End-to-end checkout flow validation
- ✅ Page Object Model architecture for scalability
- ✅ Multi-browser support (Chromium, Firefox, WebKit)
- ✅ Rich Allure and Playwright HTML reporting
- ✅ Environment-based configuration management

## 📁 Project Structure

```
tests/Projects/Project_11_TTACart/
│
├── .env                        # Environment variables for test config
├── pages/                      # Page Object Model classes
│   ├── 01_TTACartLoginPage.ts
│   ├── 02_TTACartInventoryPage.ts
│   ├── 03_TTACart.ts
│   ├── 04_TTACartCheckoutPage_Step_One.ts
│   ├── 05_TTACartCheckoutpage_Step_Two.ts
│   ├── 06_TTACartCheckoutComplete.ts
│   └── 07_TTACartOpenMenu.ts
└── tests/                      # Test specifications
    ├── CRUD_Operation_TTACart.spec.ts
    └── ttacartE2E.spec.ts
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository or copy the project folder.
2. Install dependencies from the project root:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Tests
- To run all tests:
  ```bash
  npx playwright test
  ```
- To run a specific test file:
  ```bash
  npx playwright test tests/Projects/Project_11_TTACart/tests/CRUD_Operation_TTACart.spec.ts
  ```
- To view the HTML report after tests:
  ```bash
  npx playwright show-report
  ```

### Environment Variables
- Configure sensitive data (like credentials or URLs) in the `.env` file inside the project folder.

## 🧩 Features
- **Page Object Model** for maintainable and reusable code
- **CRUD Operations** automated for TTA Cart
- **End-to-End Checkout Flow**
- **Allure Reporting** integration (see `allure-results/`)
- **Configurable via .env**

## 📄 Key Files
- `pages/` — Page classes encapsulating UI interactions
- `tests/` — Test specs for CRUD and E2E scenarios
- `.env` — Environment configuration
- `playwright.config.ts` — Playwright global config

## 🧪 Test Scenarios

### 1. CRUD Operations (`CRUD_Operation_TTACart.spec.ts`)
Tests for Create, Read, Update, and Delete operations on the TTA Cart application:
- **Create**: Add items to shopping cart
- **Read**: Retrieve and verify cart contents
- **Update**: Modify item quantities and properties
- **Delete**: Remove items from cart

### 2. End-to-End Checkout Flow (`ttacartE2E.spec.ts`)
Complete user journey testing:
- User login/authentication
- Browse inventory
- Add products to cart
- Proceed to checkout
- Enter shipping information (Step One)
- Verify order summary (Step Two)
- Complete purchase
- Verify order confirmation

## 🏗️ Page Object Model (POM) Architecture

Each page in the application is represented by a dedicated page class:

| Page Class | Purpose |
|-----------|---------|
| `01_TTACartLoginPage.ts` | Handle login/authentication flows |
| `02_TTACartInventoryPage.ts` | Manage product browsing and filtering |
| `03_TTACart.ts` | Shopping cart operations |
| `04_TTACartCheckoutPage_Step_One.ts` | Shipping information entry |
| `05_TTACartCheckoutpage_Step_Two.ts` | Order review and confirmation |
| `06_TTACartCheckoutComplete.ts` | Order completion verification |
| `07_TTACartOpenMenu.ts` | Navigation menu interactions |

**Benefits:**
- ✔️ Centralized element locators and interactions
- ✔️ Reduced code duplication
- ✔️ Easier test maintenance
- ✔️ Improved readability and scalability

## 📊 Test Reports & Artifacts

### Allure Report
Comprehensive test reporting with timeline, metrics, and historical data.

**Generate Allure Report:**
```bash
npx playwright test --reporter=line,allure-playwright
npx allure serve allure-results
```

**Allure Report Features:**
- 📈 Test execution statistics
- 📊 Pass/Fail trends
- 🔍 Detailed test logs and screenshots on failure
- 📝 Test history and flakiness detection
- 🏷️ Custom labels and categories

### Playwright HTML Report
Interactive HTML dashboard with test details and video recordings.

**View Playwright Report:**
```bash
npx playwright show-report
```

### Custom Test Report Screenshots

![alt text](<TTACartReport.png>)

#### 📷 Test Execution Dashboard
The custom test report provides a visual overview of test execution:
- Total test count and pass/fail ratio
- Test execution timeline
- Browser and OS distribution

**Sample Report Output:**
```
✓ CRUD_Operation_TTACart.spec.ts (8 tests passed)
✓ ttacartE2E.spec.ts (5 tests passed)
─────────────────────────────────────
Total: 13 tests | ✓ Passed: 13 | ✗ Failed: 0 | ⊘ Skipped: 0
Execution Time: 45.32s
```

#### 📱 Test Result Artifacts
Located in `allure-results/` and `test-results/`:
- **Result JSON Files** — Machine-readable test execution data
- **Attachments** — Screenshots and logs from each test run
- **Video Recordings** — Screen recordings for failed tests (when configured)

#### 🎯 Custom Report Sections

**1. CRUD Operations Report:**
- Login status and success rate
- Add to Cart operations tracking
- Quantity update validations
- Item removal confirmations

**2. Checkout Flow Report:**
- Step-by-step execution details
- Data entry validations
- Assertion pass/fail status
- Error screenshots and logs

**3. Performance Metrics:**
- Page load times
- Element interaction delays
- Total test suite execution time

#### 📋 How to Review Reports

1. **After Test Execution:**
   ```bash
   # View the most recent report
   npx playwright show-report
   ```

2. **Detailed Test Information:**
   - Click on individual test cases
   - Review step-by-step execution
   - Examine attached screenshots and logs

3. **Export Test Data:**
   - Reports can be integrated into CI/CD pipelines
   - Test results are JSON-formatted for easy parsing
   - Allure allows historical trend analysis

### Report Locations
- 📁 `allure-results/` — Allure report data
- 📁 `test-results/` — Playwright test results
- 📁 `playwright-report/` — Generated HTML report
- 📁 `tta-report/` — Custom report outputs

## ⚙️ Best Practices Implemented

1. **Page Object Model**
   - Each page is a separate class with methods for interactions
   - Centralized element selectors for easy maintenance
   - Reduces code duplication across tests

2. **Environment Configuration**
   - `.env` file for sensitive credentials and URLs
   - Different configurations for dev, staging, and production
   - No hardcoded values in test code

3. **Test Organization**
   - Logical grouping of related tests
   - Clear test naming conventions
   - Setup and teardown hooks for consistency

4. **Assertions & Validations**
   - Comprehensive assertions at each step
   - Meaningful error messages for debugging
   - Screenshot capture on failures

5. **Parallel Execution**
   - Tests configured to run in parallel
   - Faster feedback on code changes
   - Configurable via `playwright.config.ts`

## 🔧 Configuration & Customization

### Playwright Configuration
Edit `playwright.config.ts` to customize:
- **Browser options** (headed/headless mode)
- **Test timeout** (default: 30s per test)
- **Retries** (number of retry attempts for flaky tests)
- **Workers** (parallel execution threads)
- **Reporter options** (output formats)

Example:
```typescript
// Run tests in headed mode for debugging
npx playwright test --headed

// Run with single worker (sequential execution)
npx playwright test --workers=1

// Run specific test file with verbose output
npx playwright test tests/Projects/Project_11_TTACart/tests/CRUD_Operation_TTACart.spec.ts --verbose
```

### Environment Setup
1. Copy `.env.example` to `.env` (if available)
2. Update credentials and URLs:
   ```
   BASE_URL=https://your-app-url.com
   USERNAME=test_user
   PASSWORD=test_password
   ```
3. Test dependencies can access these via `process.env`

## 🐛 Troubleshooting

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Tests timeout | Increase timeout in `playwright.config.ts` or use `test.setTimeout()` |
| Element not found | Verify selectors are correct; use `--debug` mode to inspect |
| Flaky tests | Add waits for network idle; use `waitForLoadState()` |
| Browser crashes | Update Playwright: `npm install @playwright/test@latest` |
| Report not generating | Ensure reporter is enabled in config; check permissions |

### Debug Mode
```bash
# Run tests with interactive debugger
npx playwright test --debug

# Run with trace viewer for detailed inspection
npx playwright test --trace on
npx npx playwright show-trace trace.zip
```

## 🚀 CI/CD Integration

### GitHub Actions Example
```yaml
name: Playwright Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npm test
      - uses: actions/upload-artifact@v2
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## 📋 Project Dependencies

Core dependencies (see `package.json`):
- **@playwright/test** — Testing framework
- **typescript** — Language for type-safe code
- **dotenv** — Environment variable management
- **allure-playwright** — Allure reporting adapter (optional)

Install all dependencies:
```bash
npm install
```

## � Quick Tips & Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (re-run on file changes)
npx playwright test --watch

# Run tests in UI mode (interactive visual mode)
npx playwright test --ui

# Generate and view Allure report
npm run test:allure

# Run tests with network inspection
npx playwright test --network-idle

# Update Playwright browsers
npx playwright install

# Check Playwright version
npx playwright --version

# Generate test report and exit
npm test -- --reporter=html
npx playwright show-report
```

## ❓ Frequently Asked Questions (FAQ)

**Q: How do I run tests on a specific browser?**
```bash
npx playwright test --project=chromium
# or
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Q: Can I run a specific test by name?**
```bash
npx playwright test -g "should add item to cart"
```

**Q: How do I capture screenshots for all tests?**
Add to `playwright.config.ts`:
```typescript
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
}
```

**Q: Where are test artifacts stored?**
- Screenshots: `test-results/` directory
- Videos: `test-results/` directory (if configured)
- Reports: `playwright-report/` and `allure-results/`

**Q: How do I add a new test?**
1. Create a test file in `tests/` folder
2. Import required page objects from `pages/`
3. Write test using Playwright's `test()` and `expect()` APIs
4. Run with `npm test`

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository** and create a feature branch
2. **Write tests** following existing patterns and POM structure
3. **Update documentation** if adding new features
4. **Run full test suite** before submitting PR
5. **Submit a Pull Request** with clear description of changes

For major changes:
- Open an issue first to discuss proposed changes
- Ensure all tests pass
- Update README if needed

## 📚 Learning Resources

### Playwright
- [Official Documentation](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

### Testing Concepts
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Test Organization](https://playwright.dev/docs/best-practices#organizing-tests)
- [Debugging Tests](https://playwright.dev/docs/debug)

### Reporting
- [Allure Framework](https://docs.qameta.io/allure/)
- [Playwright Reporting](https://playwright.dev/docs/test-reporters)

## 📞 Support & Issues

- **Bug Reports**: Open an issue with detailed reproduction steps
- **Feature Requests**: Describe the use case and expected behavior
- **Questions**: Check FAQ section or existing issues first

---

## 📝 Project Metadata

| Property | Value |
|----------|-------|
| **Framework** | Playwright |
| **Language** | TypeScript |
| **Test Type** | E2E (End-to-End) |
| **Application** | TTA Cart (Sauce Labs Demo) |
| **Report Formats** | HTML, Allure, JSON |
| **CI/CD Ready** | ✅ Yes |

---

<div align="center">

**Happy Testing! 🛒🚀**

Built with ❤️ for quality assurance and test automation excellence.

[↑ Back to Top](#-tta-cart-e2e-test-automation-suite)

</div>
