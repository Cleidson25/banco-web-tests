# Banco Web Tests

## Objetivo

Este projeto demonstra como automatizar testes de interface web utilizando Cypress e JavaScript. Ele foi desenvolvido como material didático para os alunos da Mentoria 2.0, mostrando práticas de automação de testes end-to-end (E2E) para aplicações web bancárias.

O projeto automatiza fluxos de login e transferência de valores em uma aplicação web bancária, utilizando Custom Commands para organizar e reutilizar código de teste.

## Componentes do Projeto

- **Cypress**: Framework principal para testes E2E.
- **Custom Commands**: Comandos personalizados organizados em módulos para ações comuns (login, transferência, verificações).
- **Fixtures**: Dados de teste armazenados em arquivos JSON (credenciais válidas e inválidas).
- **Relatórios**: Geração de relatórios HTML com o plugin `cypress-mochawesome-reporter`.
- **Estrutura Modular**: Testes organizados em arquivos separados por funcionalidade.

## Pré-requisitos

Antes de executar os testes, certifique-se de que os seguintes serviços estejam em execução:

- **Aplicação Web**: [banco-web](https://github.com/Cleidson25/banco-web-tests) rodando em `http://localhost:4000`
- **API**: [banco-api-tests](https://github.com/Cleidson25/banco-api-tests) rodando (porta padrão da API)
- **Node.js**: Versão 14 ou superior instalada no sistema

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Cleidson25/banco-web-tests.git
   cd banco-web-tests
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

### Modo Interativo (Interface Gráfica)
Para executar os testes no modo interativo com interface gráfica:
```bash
npm run cy:open
```

### Modo Headless (Linha de Comando)
Para executar todos os testes em modo headless:
```bash
npm test
```

### Scripts Disponíveis
- `npm run test`: Executa todos os testes em modo headless
- `npm run test-qa`: Executa testes para ambiente QA (igual ao test)
- `npm run test-prod`: Executa testes para ambiente de produção (igual ao test)
- `npm run cy:headed`: Executa testes com navegador visível
- `npm run cy:open`: Abre a interface do Cypress

## Estrutura do Projeto

```
cypress/
├── e2e/                    # Arquivos de teste
│   ├── login.cy.js        # Testes de login
│   └── transferencia.cy.js # Testes de transferência
├── fixtures/              # Dados de teste
│   ├── credenciais.json   # Credenciais válidas e inválidas
│   └── example.json       # Exemplo de fixture
├── reports/               # Relatórios gerados
│   └── html/              # Relatórios HTML
├── screenshots/           # Capturas de tela dos testes
├── support/               # Arquivos de suporte
│   ├── commands.js        # Importação dos comandos customizados
│   ├── e2e.js            # Configurações globais
│   └── commands/          # Comandos customizados organizados
│       ├── common.js      # Comandos comuns (toast, combobox)
│       ├── login.js       # Comandos de login
│       └── transferencia.js # Comandos de transferência
└── videos/                # Vídeos dos testes
```

## Testes Implementados

### Login (login.cy.js)
- **Login com dados válidos**: Verifica se o usuário consegue fazer login e acessar a página de transferência.
- **Login com dados inválidos**: Verifica se é exibida mensagem de erro para credenciais incorretas.

### Transferência (transferencia.cy.js)
- **Transferência válida**: Testa transferência entre contas com valor dentro do limite.
- **Transferência acima do limite**: Testa erro ao tentar transferir mais de R$ 5.000,00 sem autenticação adicional.

## Custom Commands

Os comandos customizados estão organizados em módulos para melhor manutenção e reutilização:

### common.js
- `cy.verificarMensagemNoToast(mensagem)`: Verifica se uma mensagem específica aparece no toast de notificação.
- `cy.selecionarOpçaoNaCombobox(labelDoCampo, opcao)`: Seleciona uma opção em um campo combobox.

### login.js
- `cy.fazerLoginComCredenciaisValidas()`: Realiza login com credenciais válidas carregadas da fixture.
- `cy.fazendoLoginComCredenciaisInvalidas()`: Realiza login com credenciais inválidas.

### transferencia.js
- `cy.realizarTransferencia(contaOrigem, contaDestino, valor)`: Preenche e submete o formulário de transferência.

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes usando o `cypress-mochawesome-reporter`. Para visualizar:

1. Execute os testes: `npm test`
2. Abra o arquivo `cypress/reports/html/index.html` no navegador

Os relatórios incluem:
- Resumo dos testes executados
- Status de cada teste (passou/falhou)
- Capturas de tela em caso de falha
- Vídeos das execuções

## Configuração

A configuração do Cypress está em `cypress.config.js`:
- `baseUrl`: `http://localhost:4000`
- `reporter`: `cypress-mochawesome-reporter`

## Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente suas mudanças
4. Execute os testes para garantir que tudo funciona
5. Faça um pull request

## Licença

Este projeto está sob a licença ISC.