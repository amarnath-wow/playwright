import {test, expect} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.only("the page is accessible", async ({page}, testInfo) =>{
    await page.goto("https://commitquality.com/practice-api");
    // Check if the page is fully loadEnvFile
    await page.locator(".back-link").waitFor();
    // Check the whole page 
    const axeBuilder = await new AxeBuilder({page})
        // .include(".back-link") // only check the back-link
        // . exclude("h2")         // we can exclue
        .withTags(["wcag2aa"]) // we can use withTags
        .exclude(["best-practice"]) // we can use exclue
        .disableRules(["landmark-one-main"]) // disable rule
        .analyze();
    await testInfo.attach("accessibility-scan-results",{
        body: JSON.stringify(axeBuilder, null,2),
        contentType: "application/json",
    });
    expect(axeBuilder.violations).toEqual([]);
});