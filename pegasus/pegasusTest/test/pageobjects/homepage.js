const Page = require('./page');

class HomePage extends Page {

    get pegasusLogo(){
        return $('#a');
    }
    get from() {
        return $('#nxm-360-departure');
    }
    get fromInput() {
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[1]/div[2]/div/div[1]/div[3]/div[1]/div/input');
    }
    get fromSelInput(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div[2]')
    }
    get to() {
        return $('//div[2]/ul/li[1]/div/form/div[2]/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[2]');
    }
    get toInput() {
        return $('//*[@id="nxm-360-arrival"]/div[3]/div[1]/div/input');
    }
    get roundRadioBtn() {
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[1]/div[1]/div/div[1]/div/input');
    }
    get oneWayRadioBtn() {
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[1]/div[1]/div/div[2]/div');
    }
    get departureInput() {
        return $('#dp1');
    }
    get passday(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[2]/div[1]/div/div[2]/div/div[1]/table/tbody/tr[3]/td[2]/span')
    }
    get returnInput() {
        return $('#dp2');
    }
    get disableReturn (){
        return $('//*[@id="fligth-searh"]/div[2]/div[2]/div[2]')
    }
    get personsInput() {
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[2]/div[3]/div/div[1]');
    }
    get searchFlyBtn() {
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[2]/div[4]/div/button');
    }
    get febTwentyOne() {
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[2]/div[1]/div/div[2]/div/div[2]/table/tbody/tr[4]/td[2]');
    }
    get retTwentyOne(){
        return $('//*[@id="search-flight-datepicker-arrival"]/div/div[2]/table/tbody/tr[4]/td[2]/a')
    }
    get adult(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[2]/div[3]/div/div[2]/ul/li[1]/span')
    }
    get adultValue(){
        return $('//*[@id="fligth-searh"]/div[2]/div[2]/div[3]/div/div[2]/ul/li[1]/div/input')
    }
    get okBtn(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[2]/div[3]/div/div[2]/a')
    }
    get allList(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[1]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[2]')
    }
    get countryList(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[1]/div[2]/div/div[1]/div[3]/div[3]/div[1]/div[1]')
    }
    get turkey(){
        return $('#nxm_360_country_area_country_TR')
    }
    get istanbulAirport(){
        return $('//*[@id="nxm-360-departure"]/div[3]/div[2]/div[3]/ul/li[2]/div[1]/div[1]')
    }
    get izmir(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[1]/div[2]/div/div[3]/div[3]/div[2]/div[3]/ul/li/div[1]/div[1]')
    }             
    get turkeyReturn(){
        return $('/html/body/div[1]/div[6]/div/div/div[2]/ul/li[1]/div/form/div[2]/div[1]/div[2]/div/div[3]/div[3]/div[3]/div[1]/div[2]/div/div[1]')
    }     
    get fly(){
        return $('//*[@id="availability-list"]/div[2]/button/div')
    }
}

module.exports = new HomePage();