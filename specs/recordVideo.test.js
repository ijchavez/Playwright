const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const context = await browser.newContext({
        recordVideo: {
            dir: '../Evidence/video'
        }
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.click('button');
    
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', {state: 'hidden'});
    
    await browser.close();

})();