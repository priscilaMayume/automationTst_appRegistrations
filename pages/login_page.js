const { I } = inject();

module.exports = {
  fields:{
    email: '~email',
    password: '~senha'
  },

  buttons:{
    enter: '~entrar'
  },

  messages:{
    loginError: '~lognFail'
  },

  doLogin(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.enter);
  },

  checkLoginError() {
    I.waitForElement(this.messages.loginError, 2);
    I.seeElement(this.messages.loginError);
  }
}
