# Online Shopping - Testes Automatizados com Cypress e Cucumber

Este projeto contém testes automatizados E2E para o site [Automation Exercise](https://automationexercise.com), com a funcionalidade de Cadastro, utilizando **Cypress** e **Cucumber** para validação de funcionalidades.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Cypress](https://www.cypress.io/)
- Plugin [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/online-shopping.git

2. Acesse o diretório do projeto:
    ```bash
   cd online-shopping

3. Instale as dependências:
    ```bash
   npm install

## 🚀 Executando os Testes  

1. Executar no modo interativo (Cypress GUI):
    ```bash
   npx cypress open  

2. Escolha o arquivo .feature que deseja testar na interface do Cypress:
    ```bash
   npx cypress run
   

## 📂 Estrutura do Projeto

```markdown
online-shopping/
├── cypress/
│   ├── e2e/
│   │   ├── step_definitions/  # Definições dos passos (arquivos .js)
│   │   │   ├── cadastro/
│   │   │   │   └── 
│   │   ├── features/          # Cenários de teste (arquivos .feature)
│   │   │   └── cadastro.feature
│   ├── support/               # Configurações e comandos customizados
│   └── fixtures/              # Dados de teste (opcional)
├── node_modules/              # Dependências do projeto
├── cypress.config.js          # Configuração do Cypress
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto
```
