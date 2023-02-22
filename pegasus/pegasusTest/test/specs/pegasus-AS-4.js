const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-4', () => {
    it('Home page from input click', async () => {

        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.open();
        await browser.pause(3000);        
        await HomePage.from.waitForExist({timeout : 5000});
        await HomePage.from.click();
        await HomePage.fromInput.setValue('istanbul');
        await browser.pause(3000);
        let all = await HomePage.allList.isEnabled();
        if(all==false){
            allListNotEnable();
        }
        let country = await HomePage.countryList.isEnabled();
        if(country==false){
            countryNotEnable();
        }
        await browser.pause(3000);

            allureReporter.addFeature('Feature')
    })
})


