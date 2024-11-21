const { test, expect } = require('@playwright/test');

test("Perform mousehover action",async({ page }) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")

    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.locator ("//span[contains(text(),'Manage')]") .hover();

    await page.locator ("//body/div[@id='root']/div[1]/nav[1]/div[1]/div[2]/div[1]/div[1]/a[1]").click();
})