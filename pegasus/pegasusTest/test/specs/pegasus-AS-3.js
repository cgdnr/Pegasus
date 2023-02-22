const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-3', () => {
    it('Home page departure default select', async () => {

        await LoginPage.open()
       
        let select = await HomePage.roundRadioBtn.isSelected();
        if(select==false){
            notDefaultRoundRadioButton();
        }
        await browser.pause(3000);

            allureReporter.addFeature('Feature')
    })
})


