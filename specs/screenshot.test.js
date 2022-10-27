const { chromium } = require('playwright');

const SCREENSHOT_PATH = '../Evidence/screenshots/';
const SCREENSHOT_FILENAME = 'screenshot_';
const SCREENSHOT_EXTENSION = '.png';

(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://www.applitools.com');
    
    await page.screenshot({path: await getScreenshotName('screen')});
    
    await browser.close();

})();
(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://www.applitools.com');
    
    const logo = await page.$('.logo');
    await logo.screenshot({path: await getScreenshotName('logo')})
    
    await browser.close();

})();
(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://www.applitools.com');
    
    await page.screenshot({path: await getScreenshotName('full'), fullPage: true});
    
    await browser.close();

})();
async function getFullDate(){
    let today = new Date();

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    let curHour = today.getHours() > 12 ? today.getHours() - 12 : (today.getHours() < 10 ? "0" + today.getHours() : today.getHours())
	let curMinute = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
	let curSeconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()

    today = '_' + mm + '_' + dd + '_' + yyyy + '_' + curHour + curMinute + curSeconds;
    return today;

}
async function getScreenshotName(size){
    return SCREENSHOT_PATH + SCREENSHOT_FILENAME + size + (await getFullDate()) + SCREENSHOT_EXTENSION;

}