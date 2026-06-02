# Learning Playwright Fundamentals with TypeScript

A comprehensive learning project for mastering Playwright with TypeScript, featuring structured lessons, practical projects, and advanced testing concepts.

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies & Dependencies](#technologies--dependencies)
- [Project Structure](#project-structure)
- [Learning Modules](#learning-modules)
- [Practical Projects](#practical-projects)
- [Installation](#installation)
- [Setup & Configuration](#setup--configuration)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Utilities](#utilities)
- [Getting Started](#getting-started)

## 📚 Overview

This project is a structured learning path for Playwright automation testing framework with TypeScript. It progresses from basic concepts to advanced testing patterns, including practical end-to-end testing projects on real-world applications.

**Key Features:**
- 22 structured learning modules covering all Playwright fundamentals
- 8 practical projects applying real-world testing scenarios
- Allure test reporting integration
- Custom test reporter implementation
- Comprehensive utilities for common testing tasks
- Test data generation with Faker.js
- Excel file handling capabilities

## 🛠 Technologies & Dependencies

### Framework & Testing
- **@playwright/test**: ^1.59.1 - Playwright testing framework
- **playwright**: ^1.59.1 - Core Playwright browser automation library

### TypeScript & Types
- **TypeScript** (via Node.js environment)
- **@types/node**: ^25.6.2 - Node.js type definitions
- **@types/dotenv**: ^6.1.1 - dotenv type definitions

### Reporting & Analysis
- **allure-playwright**: ^3.7.1 - Allure test reporting integration
- Custom TTA Reporter implementation

### Data Generation & Utilities
- **@faker-js/faker**: ^10.4.0 - Generate realistic test data
- **xlsx**: ^0.18.5 - Excel file handling
- **dotenv**: ^17.4.2 - Environment variable management

## 📂 Project Structure

```
.
├── tests/
│   ├── 01_Basics/                    # Basic Playwright concepts
│   ├── 02_first_tests/               # First test examples
│   ├── 03_Locators_Commands/         # Element locators and commands
│   ├── 04_Session_Storage/           # Session and storage management
│   ├── 05_Allure_Reporting/          # Allure reporting setup
│   ├── 06_Multiple_Element/          # Handling multiple elements
│   ├── 07_WebTables/                 # Web table testing
│   ├── 08_Web_Select/                # Dropdown and select handling
│   ├── 09_Frame_Iframe/              # Frame and iframe testing
│   ├── 10_Keyboard_Hover_Drag_Drop/  # User interactions
│   ├── 11_JS_Alerts/                 # JavaScript alert handling
│   ├── 12_Handle_SVG/                # SVG element testing
│   ├── 13_Shadow_DOM/                # Shadow DOM testing
│   ├── 14_FileUpload/                # File upload testing
│   ├── 15_File_Download/             # File download testing
│   ├── 16_Scroll_toElement/          # Scrolling and positioning
│   ├── 17_Expect_Assertions/         # Assertions and expectations
│   ├── 18_Test_hooks/                # Test lifecycle hooks
│   ├── 19_Data_Driven_Testing/       # Parameterized testing
│   ├── 20_Page_Object_Model/         # Page Object Model pattern
│   ├── 21_Fixture/                   # Playwright fixtures
│   ├── 22_Misc_Concepts/             # Miscellaneous advanced concepts
│   ├── Projects/                     # Practical end-to-end projects
│   │   ├── Project_4_TTA_Bank/
│   │   ├── Project_5_QA_Profile_Form/
│   │   ├── Project_6_WebTables/
│   │   ├── Project_7_Hover/
│   │   ├── Project_8_Flipkart/
│   │   ├── Project_9_Shadow_DOM_SelectorHub/
│   │   ├── Project_10_Data_Driven_Testing/
│   │   └── Project_11_TTACart/
│   ├── utils/                        # Shared utilities
│   ├── Setup.md                      # Setup instructions
│   └── tsconfig.json                 # TypeScript configuration
├── utils/
│   └── CustomTTAReporter.ts          # Custom test reporter
├── playwright.config.ts              # Playwright configuration
├── package.json                      # Project dependencies
├── playwright-report/                # HTML test reports
├── allure-results/                   # Allure test results
├── tta-report/                       # Custom reporter output
└── README.md                         # This file
```

## 📖 Learning Modules

The course is structured as 22 progressive lessons covering Playwright fundamentals:

| Module | Topic | Focus |
|--------|-------|-------|
| 01 | Basics | Playwright setup and fundamentals |
| 02 | First Tests | Writing your first tests |
| 03 | Locators & Commands | Element identification and interaction |
| 04 | Session Storage | State management and cookies |
| 05 | Allure Reporting | Setting up reporting framework |
| 06 | Multiple Elements | Working with collections |
| 07 | Web Tables | Table data extraction and testing |
| 08 | Web Select | Dropdown menu handling |
| 09 | Frame/Iframe | Nested content testing |
| 10 | Keyboard/Hover/Drag | Advanced user interactions |
| 11 | JS Alerts | Alert dialog handling |
| 12 | SVG | SVG element testing |
| 13 | Shadow DOM | Shadow DOM navigation |
| 14 | File Upload | File upload functionality |
| 15 | File Download | File download handling |
| 16 | Scroll | Scrolling and positioning |
| 17 | Assertions | Test expectations and validations |
| 18 | Test Hooks | Setup/teardown and lifecycle |
| 19 | Data-Driven | Parameterized test execution |
| 20 | Page Object Model | Design pattern implementation |
| 21 | Fixtures | Playwright fixture patterns |
| 22 | Misc Concepts | Advanced and miscellaneous topics |

## 🎯 Practical Projects

This project includes 8 real-world testing projects:

1. **Project_4_TTA_Bank** - Banking application testing
2. **Project_5_QA_Profile_Form** - Form validation and submission
3. **Project_6_WebTables** - Complex table interactions
4. **Project_7_Hover** - Hover and mouse interaction testing
5. **Project_8_Flipkart** - E-commerce platform testing
6. **Project_9_Shadow_DOM_SelectorHub** - Shadow DOM challenges
7. **Project_10_Data_Driven_Testing** - Parameterized testing with multiple datasets
8. **Project_11_TTACart** - Full e-commerce cart and checkout flow

Each project includes:
- End-to-end test scenarios
- Page Object Model implementation
- Comprehensive test coverage
- Allure reporting integration

## 🚀 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Steps

1. Clone or navigate to the project directory:
```bash
cd Learning_PlaywrightFundamentals_WithTypescript
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## ⚙️ Setup & Configuration

### Environment Configuration

Create a `.env` file in the project root if needed for sensitive configurations:
```bash
# Example .env file
BASE_URL=http://localhost:3000
API_KEY=your_api_key_here
```

### Playwright Configuration

The `playwright.config.ts` file includes:
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled (fully parallel by default)
- **Retries**: 0 on local, 2 on CI
- **Screenshots**: Captured for all tests
- **Videos**: Recorded for all tests
- **Traces**: On for failed test debugging
- **Reporters**: HTML reporter enabled
- **Browsers**: Chromium (Firefox commented out as example)

### TypeScript Configuration

TypeScript is configured via `tests/tsconfig.json` with proper type definitions and compilation settings.

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/01_Basics/test.spec.ts
```

### Run Tests Matching Pattern
```bash
npx playwright test --grep "pattern"
```

### Run Specific Project
```bash
npx playwright test tests/Projects/Project_11_TTACart/
```

### Run with Specific Browser
```bash
npx playwright test --project=chromium
```

### Run in Debug Mode
```bash
npx playwright test --debug
```

### Run in Headed Mode (see browser)
```bash
npx playwright test --headed
```

### Run Single Test in Debug
```bash
npx playwright test --debug tests/path/to/test.spec.ts
```

### View Test Results
```bash
npx playwright show-report
```

## 📊 Test Reports

### HTML Report

Playwright generates an HTML report automatically after test runs:
```bash
npx playwright show-report
```

Reports are stored in the `playwright-report/` directory.

### Allure Reporting

The project has Allure reporting integration (currently commented out in config but available):

1. Enable in `playwright.config.ts`:
```typescript
reporter: [['allure-playwright'], ['html']],
```

2. Generate Allure report:
```bash
allure generate allure-results -o allure-report
```

3. View Allure report:
```bash
allure open allure-report
```

### Custom TTA Reporter

A custom test reporter (`CustomTTAReporter.ts`) is available in the utils folder for additional reporting capabilities.

## 🔧 Utilities

### CustomTTAReporter.ts
Located in `utils/`, this custom reporter provides:
- Test execution metrics
- Custom formatting
- Additional test insights
- Results stored in `tta-report/`

### Available Helpers
The `tests/utils/` directory contains:
- Common test utilities
- Helper functions
- Reusable components

## 🎓 Getting Started

### For Beginners

1. **Start with the basics:**
   ```bash
   npx playwright test tests/01_Basics/
   ```

2. **Run your first test:**
   ```bash
   npx playwright test tests/02_first_tests/
   ```

3. **View results:**
   ```bash
   npx playwright show-report
   ```

### For Intermediate Learners

1. **Explore advanced selectors:**
   ```bash
   npx playwright test tests/03_Locators_Commands/
   ```

2. **Learn Page Object Model:**
   ```bash
   npx playwright test tests/20_Page_Object_Model/
   ```

3. **Try practical projects:**
   ```bash
   npx playwright test tests/Projects/
   ```

### For Advanced Users

1. **Explore all advanced concepts:**
   - Shadow DOM testing
   - File handling
   - Data-driven testing
   - Fixture patterns

2. **Run complex projects:**
   ```bash
   npx playwright test tests/Projects/Project_11_TTACart/
   ```

3. **Implement custom reporters and utilities**

## 💡 Tips & Best Practices

- **Use Page Object Model** for maintainable tests
- **Leverage Playwright Fixtures** for test setup/teardown
- **Implement Data-Driven Testing** for multiple scenarios
- **Capture Screenshots & Videos** for debugging failed tests
- **Use Traces** for detailed debugging information
- **Run tests in parallel** for faster execution
- **Implement proper waits** instead of hard sleeps
- **Use proper assertions** for reliable tests

## 📝 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API](https://playwright.dev/docs/api/class-playwright)
- [Test Configuration Guide](https://playwright.dev/docs/test-configuration)
- [Debugging Guide](https://playwright.dev/docs/debug)

## 📖 File Reference

- `Setup.md` - Contains additional setup instructions for specific modules
- `playwright.config.ts` - Main Playwright configuration file
- `package.json` - Project dependencies and metadata
- `tests/tsconfig.json` - TypeScript compiler settings

## 🤝 Contributing

This is a learning project. Feel free to:
- Add new test cases to existing modules
- Create new projects
- Enhance utilities and helpers
- Improve documentation

## 📄 License

This project is licensed under ISC License.

---

**Happy Testing! 🎉**

For questions or issues, refer to the individual module documentation or consult the Playwright official documentation.
