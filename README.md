# Factify E2E Tests Assignment

When building this project, I focused on clarity, maintainability, and DRY principles. The https://atid.store/ payment functionality isn't working as expected, and therefore I had to skip the post payment checks, as well as Scenario number 2, due to lack of succesful payment choice. Scenario number 3 is skipped as well as there's no stock characteristics in the product.

---

## Tech Stack

- Playwright
- TypeScript
- HTML Report

---

## Project Structure

#### - Page Object Model (POM) files

#### - UI tests using page objects

#### - Reusable test fixtures

---

## Getting Started

1. Clone the project

   ```bash
   git clone https://github.com/nadegyel/factify-assignment-nadegda-yeliashkevich.git

   cd factify-assignment-nadegda-yeliashkevich
   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Install Playwright browsers
   ```bash
   npx playwright install
   ```

## Running Tests

- run tests (headless)
  ```bash
  npx playwright test
  ```
- run tests (headed)
  ```bash
  npx playwright test --headed
  ```

## Reports

- HTML report (built‑in)
  - After a run, open the HTML report:
    ```bash
    npx playwright show-report
    ```

## Task Comments

- I usually avoid fragile selectors such as dynamic class names or non-semantic DOM references.
  However, due to time constraints, I relied on the existing DOM structure in this project.
  In a testing setup, I prefer using stable attributes like data-testid or accessibility-based selectors (getByRole, getByLabel) for long-term reliability.

- Cart Assumption:
  Tests assume that only the products explicitly added during the test appear in the cart (no pre-existing items).

- Hardcoded User Data:
  The billing details used during checkout are currently hardcoded for simplicity and time efficiency.
  In a future iteration, I’d externalize this data into a fixture or JSON file, allowing for data-driven testing.
  This would enable running the same flow with multiple user profiles, testing edge cases (e.g., invalid emails or missing fields), and improving maintainability without modifying the test logic.
