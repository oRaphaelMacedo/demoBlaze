# test-e2e-cypress-demoblaze

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado as seguintes ferramentas:

Node.js v18.15.0
Cypress 12.10.0

## Instalação

Para instalar o projeto, siga estes passos:

Clone o repositório do projeto
Instale as dependências com o comando npm install
Configure as variáveis de ambiente necessárias

## Execução de testes

Para executar os testes do Cypress, siga estes passos:
Entre no repositório do projeto
Execute o comando npx cypress open
Selecione a spec que deseja executar
O Cypress executará automaticamente os testes
Você pode personalizar os testes de acordo com as necessidades do projeto, adicionando novas specs ou novos testes dentro das specs existentes.

## Boas práticas

Para garantir a eficiência dos testes com o Cypress, foram seguidas estas recomendações:

- Foi definida uma URL dentro do arquivo cypress.config.js para separação dos ambientes;
- Uso de beforeEach() pensando em futuras tarefas repetitivas;
- Uso de Comandos personalizados facilitando a manutenção do script;
- Foi criada uma constante "locators" para agrupar de forma modular os campos a serem preenchidos;
- Uso de técnicas seguras para preenchimento e ocultação de dados sensiveis como password dentro do arquivo cypress.env.json e seu exemplo de utilização no arquivo cypress.env.example.json
- Uso das últimas versões do Cypress e suas dependências

## Observação

O ambiente do site DemoBlaze apresentou instabilidade diversas vezes durante o teste, por tanto, foram aplicadas técnicas como .type(username, {force:true}) por exemplo. Só assim foi possível garantir a execução dos preenchimentos.

Todo o teste desse script foi realizado em um Ambiente MacOS.

## Licença

Este projeto está licenciado sob a Licença [Pública].

## Contato

Para entrar em contato com os responsáveis pelo projeto, envie um e-mail para [oRaphaelMacedo"gmail.com].

### Desenvolvido por Raphael de Macedo Batista.