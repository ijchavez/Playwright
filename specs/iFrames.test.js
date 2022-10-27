const { chromium, firefox, webkit } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless : false, slowMo : 100});
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/frames');

    const frame1 = await page.frame('frame1'); //regex
    const titleInsideFrame1 = await frame1.$('h1');

    console.log(await titleInsideFrame1.innerText());
    
    await browser.close();

})();
