const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-11', () => {
    it('DepartureDate Select ', async () => {

        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.open();
        await browser.pause(3000); 
        await HomePage.departureInput.click();
        await browser.pause(3000);
        await HomePage.febTwentyOne.click();
        await browser.pause(3000);     
        let ret = await HomePage.disableReturn.isClickable();
        if(ret==false){
            returnDateisDisable();
        }
        
      allureReporter.addFeature('Feature')
    })
})


