const { test, expect } = require('@playwright/test');

//Test to Open Website then go to registration page
test("Open Website and verify signup link", async ({ page }) => {
    // Step 1: Navigate to the login page
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Log the current URL
    const url = await page.url();
    console.log("Current URL is: " + url);

    // Step 2: Click on the signup link
    await page.click('a.subLink'); 

    // Step 3: Wait for navigation after clicking the link
    // await page.waitForNavigation();

    // Step 4: Get the new URL after clicking
    const newUrl = page.url();

    // Step 5: Verify the new URL
    const expectedUrl = 'https://freelance-learn-automation.vercel.app/signup'; // Adjust to your expected URL
    expect(newUrl).toBe(expectedUrl); // This will assert the URLs are equal

    console.log("Signup link verified successfully. New URL is: " + newUrl);
});

test("Enter details",async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.getByPlaceholder("Name" ,{ timeout: 60000 }).fill("Somhrita")
    await page.getByPlaceholder("Email").fill("amin@gmail.com")
    await page.getByPlaceholder("Password").fill("amin@123")

    
    
});
