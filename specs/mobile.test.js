const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];

(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const context = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation: { latitude: -34.5999976, longitude: -58.4833314 },
        locale: 'es-ES'
    });
    const page = await context.newPage();
    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(5000); 
    await browser.close();

})(); 