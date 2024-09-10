# Setup:
1. New installation
- `npm init playwright`
2. Ensure the below are available
- `npm install playwright`
- `npm install @axe-core/playwright`
- `npx playwright install chromium`

# Execute:
- `npx playwright test`  
note: To run only chormium, update the playwright.config.js

# Support:
## Accessibility:
1. Automation framework - Playwright accessibility https://playwright.dev/docs/accessibility-testing
2. rely package - axe-core https://www.npmjs.com/package/@axe-core/playwright
3. For the test we are using the website (https://commitquality.com/practice-api)
4. Start using virtual environment
- On visual Studio code https://www.youtube.com/watch?v=GZbeL5AcTgw
  - Create virtual environment :  `python3.11 -m venv venv`
  - Activate virtual environment : `source venv/bin/activate`
  - Remove virtual : `rm -rf venv`
- On Pycharm - use virtual environment while cloning the repo (move the venv file to git ignore)
https://www.youtube.com/watch?v=2P30W3TN4nI
5. Use Playwright storageState for Auth (https://playwright.dev/docs/auth)
6. accessibility statndards (Axe-core Tags :  https://www.deque.com/axe/core-documentation/api-documentation/)
7. rule description (https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md)
8. Setting the screenshot and video recording of the test - update the playwright config with the below tags
```
    video: "retain-on-failure",
    screenshot: "only-on-failure",
```


# Disclaimer
Automated accessibility tests can detect some common accessibility problems such as missing or invalid properties. But many accessibility problems can only be discovered through manual testing. We recommend using a combination of automated testing, manual accessibility assessments, and inclusive user testing. For manual assessments, we recommend Accessibility Insights for Web (https://accessibilityinsights.io/docs/web/overview/?referrer=playwright-accessibility-testing-js), a free and open source dev tool that walks you through assessing a website for WCAG 2.1 AA coverage (https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1).
