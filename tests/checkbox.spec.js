const { test, expect } = require('@playwright/test');

test("Select Values From Dropdown",async({ page }) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    const checkbox = page.getByLabel('API Testing');
    await checkbox.setChecked(true);

    // Optional: Verify that the checkbox is checked
    await expect(checkbox).toBeChecked();
    console.log("Checkbox for 'API Testing' has been selected.");

    await page.locator("#hobbies").selectOption(['Playing','Swimming'])
    await page.waitForTimeout(3000)


    
})