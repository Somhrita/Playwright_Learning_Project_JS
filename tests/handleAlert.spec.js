const{test,expect}=require('@playwright/test')

test("Handling Alert",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.locator("//button[contains(text(),'Click for JS Alert')]").click();

    page.on('dialog',async(d)=>{
        expect(d.type().toContain("alert"))
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept();
    })

    

    
})