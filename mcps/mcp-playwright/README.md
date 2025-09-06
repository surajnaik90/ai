# Playwright 


## Introduction

It enables end-to-end testing for modern web apps.


## How to install & Configure MCP in VSCode

1. Python

   `pip install playwright`

   `playwright install` - To install all browsers [Chromium, Firefox and Webkit]

2. NPM

   `npm install playwright`

   `playwright install` [Installs all the broswer engines]

3. Configure MCP in VSCode

   ```json
   {
      "playwright": {
         "command": "npx",
         "args": [ "@playwright/mcp@latest" ]
      }
   }
   ```

## Concepts

1. Browser engines:

   **Chromium**: Chrome, Edge

   **Firefox**: Firefox

   **Webkit**: Apple Safari [For non-apple platforms, playwright has 'MiniBrowser' wrapper]

