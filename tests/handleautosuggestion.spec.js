const{test,expect}=require('@playwright/test')

test("Verify Application Title Using Keyboard",async({page})=>{
    await page.goto("http://www.google.com")
    await page.locator("textarea[name='q']").fill("Rabindranath")
    await page.waitForSelector("//cr-searchbox-match[@role='option']")

    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
})