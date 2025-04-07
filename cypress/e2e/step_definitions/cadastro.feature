Feature: Funcionalidade cadastro e deleção de cadastro de usuário

  @cadastro
  Scenario: Usuário realiza cadastro no site com sucesso
    Given Acessar o site automationexercise.com
    When Clicar em "Signup / Login" para cadastrar um novo usuário
    When Inserir Name e Email
    When Clicar em "Signup"
    When Inserir os campos: Title, Name, Email, Password, Date of birth
    When Selecionar o checkbox "Sign up for our newsletter!"
    When Selecionar o checkbox "Receive special offers from our partners!"
    When Inserir Preencher os campos: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    When Clicar em "Create Account"
    When Clicar no botão "Continue"
    Then O usuário deve ser cadastrado com sucesso
    And  Clicar em "Delete Account"
    Then O usuário deve ser deletado com sucesso


