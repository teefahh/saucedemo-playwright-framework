# Playwright Automation Project (POM Implementation)

This project demonstrates my hands-on practice building a Playwright automation framework using the Page Object Model (POM) design pattern. It focuses on writing maintainable, reusable, and scalable UI automation tests using Playwright.

## Key Highlights
- Implemented Page Object Model (POM) for login and product pages
- Created reusable locators and methods for UI interactions
- Structured tests to separate test logic from page interactions
- Automated core scenarios such as login and product validation
- Practiced clean and maintainable automation structure

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Setup and Running Tests

Install dependencies:
```bash
  npm install
  cp .env.example .env
  npx playwright install
  ````
  
Set up environment variables:
```bash
  cp .env.example .env
````

Install Playwright browsers:
```bash
  npx playwright install
````

Run all tests:
```bash
  npm test
````

Run in specific test suite:
```bash
  npm run test:saucedemo
```

Run on specific browsers:
```bash
  npm run test:chromium
  npm run test:firefox
```
Run in headed mode:
```bash
  npm run test:headed
```

Project Structure:
```bash
    Playwright_Practice/
  ├── pages/
  │   ├── LoginPage.ts
  │   └── ProductsPage.ts
  ├── tests/
  │   ├── login.spec.ts
  │   └── products.spec.ts
  ├── utils/
  ├── test-data/
  ├── .env.example
  ├── playwright.config.ts
  ├── package.json
  └── README.md
```

## Design Approach

This framework follows the Page Object Model (POM) to improve:

Maintainability: Changes to UI elements are handled in one place
Reusability: Common actions are reused across multiple tests
Scalability: Easy to extend with more pages and test scenarios

Page classes handle UI interactions, while test files focus on validations and assertions, ensuring clear separation of concerns.

📌 Future Improvements
Add Cart and Checkout page automation
Integrate API testing alongside UI automation
Implement CI/CD pipeline (e.g., GitHub Actions)
Add reporting (Allure / HTML reports)

## Author:
Latifat Tobby Yisa