const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-12', () => {
    it('Adult Default Control ', async () => {

        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.open();
        await browser.pause(3000); 
       
        await HomePage.personsInput.click();
        let adl= await HomePage.adultValue.getValue();
        if(adl!=1){
            notPersonDefaultOne();
        }
        await browser.pause(3000);
      allureReporter.addFeature('Feature')
    })
})


