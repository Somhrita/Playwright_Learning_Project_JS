const { test, expect } = require('@playwright/test');

test("Perform mousehover action",async({ page }) =>{
    await page.goto("https://www.google.com")

    await page.locator("textarea[name='q']").fill("Rabindranath tagore")

    await page.keyboard.press("Control+A")
    await page.keyboard.press("Backspace")

})