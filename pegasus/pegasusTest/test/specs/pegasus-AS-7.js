const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-7', () => {
    it('toInput Click', async () => {
       
        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.open();
        await browser.pause(3000);   
        await HomePage.from.click();
        await browser.pause(3000);

        await HomePage.countryList.isEnabled();
        await HomePage.turkey.click();
        await browser.pause(3000);
        await HomePage.fromInput.click();
        await HomePage.fromInput.setValue('istanbul');
        await browser.pause(3000);
        await HomePage.istanbulAirport.click();
        await browser.pause(3000);

        await HomePage.to.click();
        await browser.pause(2000);
        await HomePage.toInput.click();
        await browser.pause(3000);
       
        let country = await HomePage.countryList.isEnabled();
        if(country==false){
            countryListNotEnable();
        }
        let allList = await HomePage.allList.isExisting();
        if(allList==false){
            allListNotEnable();
        }
        await browser.pause(3000);

            allureReporter.addFeature('Feature')
    })
})


