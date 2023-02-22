const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-10', () => {
    it('DepartureDate Select Control', async () => {

        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.open();
        await browser.pause(3000); 
        await HomePage.departureInput.click();
        await browser.pause(3000);
        await HomePage.passday.click();
        let pass = HomePage.passday.isSelected();
        console.log("passdate",pass)
        if(pass==true){
            passDaySelect();
        }
        await browser.pause(3000);
        let round= await HomePage.returnInput.isClickable();
        if(round==true){
            returndaySelect();
        }
            allureReporter.addFeature('Feature')
    })
})


