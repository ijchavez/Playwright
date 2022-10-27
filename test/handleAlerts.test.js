const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/alerts');

    await clickOnAlert(page, "", '#confirmButton');
    await clickOnAlert(page, 'my text is this', '#promtButton');

    await browser.close();

})();
async function clickOnAlert(page, acceptDialog, element){
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        if(!acceptDialog){
            await dialog.accept();
        
        }else{
            console.log(acceptDialog);
            await dialog.accept(acceptDialog);

        }
        

    });
    await page.click(element);

}