const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless: true});
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log("disabled:", await firstName.isDisabled());
    console.log("enabled:", await firstName.isEnabled());
    console.log("editable:", await firstName.isEditable());
    
    console.log("checked:", await sportsCheck.isChecked());
    console.log("visible:", await sportsCheck.isVisible());
 
    console.log("hidden:", await submitBtn.isHidden());
    console.log("visible:", await submitBtn.isVisible());

    await browser.close();

})();
