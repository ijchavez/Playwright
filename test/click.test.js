const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless : false, slowMo : 800});
    const page = await browser.newPage();

    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    await masterpiece(page);

    await browser.close();

})();
async function masterpiece (page){
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');

}