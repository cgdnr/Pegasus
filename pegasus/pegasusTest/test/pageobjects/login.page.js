const Page = require('./page');

class LoginPage extends Page {
   
     


    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
