Feature('login');
const { validEmail, invalidEmail, validPassword, invalidPassword } = require('../util.js');
const {I,login_page, home_page} = inject()

Scenario('login with sucess', () => {

    login_page.doLogin(validEmail, validPassword)
    home_page.checkLoginSucess()

});


Scenario('login with error', () => {
    login_page.doLogin(invalidEmail, invalidPassword)
    login_page.checkLoginError();

});
