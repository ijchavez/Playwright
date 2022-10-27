const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless : false, slowMo : 100});
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = await page.$('#dropdown');

    //label
    await dropdown.selectOption({label: 'Option 2'});
    //value
    await dropdown.selectOption({value: '1'});
    //index
    await dropdown.selectOption({index: 1});
    
    const availableOptions = await dropdown.$$('option')
    for(let i = 0; i < availableOptions.length; i++){
        console.log(await availableOptions[i].innerText());

    }

    await browser.close();

})();
