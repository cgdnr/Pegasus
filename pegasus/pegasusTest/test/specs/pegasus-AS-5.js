const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-5', () => {
    it('Home page from select', async () => {

        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.open();
        await browser.pause(3000);   
        await HomePage.from.click();
        await browser.pause(3000);   
        await HomePage.countryList.isEnabled();
        await HomePage.turkey.click();
        await browser.pause(2000);   
        let airport = await HomePage.istanbulAirport.isEnabled();
        if(airport==false){
            airportNotEnable();
        }
        await browser.pause(5000);   

            allureReporter.addFeature('Feature')
    })
})


