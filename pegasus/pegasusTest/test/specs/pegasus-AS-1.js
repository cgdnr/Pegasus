const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-1', () => {
    it('OPEN THE PAGE', async () => {

        await LoginPage.open()
        let oneWay = await HomePage.oneWayRadioBtn.isClickable();        
        if(oneWay==false){
            oneWayRadioBtnNotClickable();
        }
        await browser.pause(3000);

            allureReporter.addFeature('Feature')
    })
})


