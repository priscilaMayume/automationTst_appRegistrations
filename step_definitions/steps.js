const { I } = inject();


Given('I fill email', () => {
  I.fillField('~email', 'teste@teste.com');
});

Given('I fill password', () => {
  I.fillField('~senha', '12356');
});

When('I tap on Entrar', () => {
  I.click('~entrar');
});

Then('I see the Salvar button', () => {
  I.waitForElement('~salvar', 2);
  I.seeElement('~salvar');
});
