# The Internet - Playwright Test Automation

A practical QA automation project built with **Playwright and JavaScript** to demonstrate web testing, automation, defect identification, and test reporting.

**Application Under Test:** The Internet

---

## 🛠️ Tech Stack

- Playwright
- JavaScript
- Node.js / npm
- Git / GitHub
- Chromium

---

## 🧪 Test Coverage

**10 automated test cases** covering:

- Smoke Testing
- Regression Testing
- Negative Testing
- Functional Testing
- Validation Testing
- Dynamic Content
- Form & Checkbox Testing
- JavaScript Alerts
- Login Testing

Tests are organised using Playwright tags:


@smoke
@regression
@negative
@validation

🐛 Defect Identified
BUG-001 - Broken Images

TC-010 identifies images that fail to load using:

naturalWidth === 0

The condition was documented as a defect rather than simply causing the test to fail.

Defect report: bug-reports/BUG-001.pdf

📁 Project Structure
the-internet-playwright-automation/
│
├── tests/
│   └── example.spec.js
│
├── test-cases/
│   └── test-cases.pdf
│
├── bug-reports/
│   └── BUG-001.pdf
│
├── playwright-reports/
│   └── report.pdf
│
├── playwright.config.js
├── reporter.js
├── package.json
├── package-lock.json
└── README.md


▶️ Running the Tests

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Run tests:

npx playwright test

Run with the browser visible:

npx playwright test --headed

Run smoke tests:

npx playwright test --grep @smoke

📋 QA Skills Demonstrated
Manual & Automated Testing
Test Case Design
Smoke & Regression Testing
Negative Testing
Defect Reporting
Playwright Automation
JavaScript
Locators & Assertions
Test Tags
Custom Test Reporter
Git / GitHub

🚀 Future Improvements
Page Object Model (POM)
API Testing
Database Validation
GitHub Actions / CI
Cross-Browser Testing
Test Data Management

👤 Author

Yonela Mica

ISTQB Certified Tester (CTFL)

Support Analyst transitioning into QA / Software Testing.

