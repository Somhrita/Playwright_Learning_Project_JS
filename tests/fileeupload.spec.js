const{test,expect}=require('@playwright/test')

test("Verify file upload",async({ page }) =>{
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("//input[@id='file-upload']").setInputFiles("./uploads/After.png");
    await page.locator("//input[@id='file-submit']").click();
    const h3Text = await page.locator("//h3").textContent();

    expect(h3Text).toBe("File Uploaded!");
    
    
})