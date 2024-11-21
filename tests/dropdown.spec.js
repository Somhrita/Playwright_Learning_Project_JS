const { test, expect } = require('@playwright/test');

test("Select Values From Dropdown",async({ page }) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label:"Goa"})
    
})