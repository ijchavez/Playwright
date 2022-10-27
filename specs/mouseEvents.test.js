const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://paint.js.org/');

    await square(page, 200, 200)

    await browser.close();

})();
async function square(page, x, y){
    await page.mouse.move(x, y);
    await page.mouse.down();

    await page.mouse.move(x + 200, y);
    await page.mouse.move(x + 200, y + 200);
    await page.mouse.move(x, y + 200);
    await page.mouse.move(x, y);

    await page.mouse.up();
}