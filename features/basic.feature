Feature: Login
As a user
I would like to log in
To access the system

  Scenario: Login with sucess
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button
