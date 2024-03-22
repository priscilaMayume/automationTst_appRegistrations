const { I } = inject();

module.exports = {
  button:{
    save: '~salvar'
  },

  checkLoginSucess() {
    I.waitForElement(this.button.save, 2)
    I.seeElement(this.button.save)
    
  }
}
