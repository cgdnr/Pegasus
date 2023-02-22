const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page')
const HomePage= require('../pageobjects/homepage')


describe('pegasus-AS-2', () => {
    it('Home page element isEnable', async () => {

        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.open();
        await browser.pause(3000);

        let oneWay = await HomePage.oneWayRadioBtn.isClickable(); 
        if(oneWay==false){
            oneWayRadioBtnNotClickable();
        }
        let radio = await HomePage.roundRadioBtn.isSelected();
        if(radio==false){
            roundRadioBtnNotClickable();
        }
        let fr = await HomePage.from.isClickable();
        if(fr==false){
            fromInputNotClickable();
        }
        let t = await HomePage.to.isClickable();
        if(t==false){
            toInputNotClickable();
        }
        let departure = await HomePage.departureInput.isClickable();
        if(departure==false){
            departureInputNotClickable();
        }
        let returnIn = await HomePage.returnInput.isClickable();
        if(returnIn==false){
            returnInputNotClickable();
        }
        let person = await HomePage.personsInput.isClickable();
        if(person==false){
            personInputNotClickable();
        }
        let fly = await HomePage.searchFlyBtn.isClickable();
        if(fly==false){
            searchFlynNotClickable();
        }

            allureReporter.addFeature('Feature')
    })
})


