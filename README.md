# 💻 Test Automation Framework | Learning Project

This is a learning project that demonstrates various automation techniques using [Playwright](https://playwright.dev/) with JavaScript. The project covers multiple automation scenarios such as interacting with checkboxes, file uploads, handling multiple windows, managing alerts, and more.

The goal of this project is to explore and practice Playwright's capabilities in real-world scenarios.

[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 

[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Playwright HTML Reporter](https://img.shields.io/badge/Playwright%20HTML%20Reporter-<COLOR>?style=for-the-badge&logo=playwright&logoColor=white)](https://www.npmjs.com/package/playwright-html-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

## Features

This project demonstrates the following functionalities using Playwright:

- **Checkbox Interaction**: Automating actions like checking and unchecking checkboxes.
- **File Upload**: Automating file upload actions in web forms.
- **File Read**: Reading files and extracting content for automated testing.
- **Multiple Windows Handling**: Managing and interacting with multiple browser windows/tabs.
- **Alerts Handling**: Interacting with browser alerts, confirms, and prompts.
- **Autosuggestion Handling**: Automating actions in input fields with dynamic suggestions (e.g., Google search).
- **Frames Handling**: Interacting with embedded frames within a page.
- **Keyboard Events**: Simulating keyboard input for form submissions and other use cases.
- **Mouse Pointer Control**: Automating mouse movements and clicks.
- **Dropdown Handling**: Interacting with dropdown menus and selecting options.
- **Wait for Load State**: Ensuring elements are loaded before performing further actions.

## Tech Stack

- **Playwright**: A Node.js library for browser automation.
- **JavaScript**: The programming language used for writing the automation scripts.
- **Node.js**: Runtime environment to execute JavaScript on the server side.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/your-playwright-project.git
   cd your-playwright-project
2. **Install dependencies**:
   If you don't have Node.js installed, download and install it first. Then, run:
   ```bash
   npm install
3. **Install Playwright**:
   Playwright is a dependency, so if you haven't installed it yet, run:
   ```bash
   npm install playwright
3. **Run the project:**:
   After installation, you can execute the Playwright scripts by running:  
   ```bash
   npx playwright test

## Folder Structure
```plaintext
   your-playwright-project/
├── .gitignore                # List of files and directories to ignore in version control (e.g., node_modules, .env)
├── node_modules/             # Folder created by npm to store installed dependencies
├── tests/                    # Folder for test scripts
│   ├── checkbox.spec.js
|   ├── dropdown.spec.js
│   ├── fileUpload.spec.js
│   ├── fileread.spec.js
│   ├── handle-windows.spec.js
│   ├── handleAlert.spec.js
│   ├── handleautosuggestion.spec.js
│   ├── handleframes.spec.js
│   ├── keyboardevent.spec.js
│   ├── mousehover.spec.js
│   └── waitForLoadState.spec.js
├── utils/                    # Folder for utility scripts (helpers, reusable functions)
│   ├── browserSetup.js       # Common setup for Playwright browser (e.g., launch browser, context setup)
│   ├── loginHelper.js        # Helper function for login automation
│   ├── fileUtils.js          # Functions for file handling (upload, download, read)
│   └── waitHelper.js         # Helper function for waiting on certain conditions (waitForLoad, etc.)
├── screenshots/              # Folder to save screenshots for visual verification
│   └── sampleScreenshot.png  # Example screenshot captured during test run
├── reports/                  # Folder to store generated reports (e.g., test run reports, logs)
│   ├── testReport.html       # Example test report generated after test execution
│   └── logs/                 # Folder for detailed logs
│       └── testExecution.log
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Lock file for npm dependencies
├── README.md                 # Project documentation (README file)
├── playwright.config.js      # Configuration file for Playwright (browser settings, test configurations)
└── LICENSE                   # License file (if applicable)
