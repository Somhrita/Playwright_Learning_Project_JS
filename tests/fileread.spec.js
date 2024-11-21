const { test, expect } = require('@playwright/test');
const fs = require('fs').promises;

async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        throw error;
    }
}

test('To verify file read', async ({ page }) => {
    // Read JSON file
    //const jsonData = await readJsonFile("C:\\Playwright_second_project\\details.json");
    //console.log(jsonData)
    
    //expect(jsonData).toHaveProperty("url"); // Check if the URL property exists
    
    // Navigate to the URL from the JSON
    //await page.goto(jsonData.url);

    // Verify the title of the page
    //const title = await page.title();
    // Adjust the expected title as necessary

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email']").fill(info.username)
});