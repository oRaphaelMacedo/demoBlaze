# cy.sh é um arquivo criar facilitar o SETUP de um prjeto com Cypress
# Ele espera um argumento com o nome do projeto em sua execução
# Este arquivo utiliza sintaxe válida somente em sistemas operacionais
# baseados em Unix, tais como macOS e Linux.
# Para sistemas Windows vale estudar a biblioteca cly,
# criada por Gleb Bahmutov, ex-VP de engineering do time do Cypress.
# Documentação oficial https://www.npmjs.com/package/@bahmutov/cly

mkdir www/$1
cd www/$1
git init
touch .gitignore
echo ".DS_Store\ncypress.env.json\ncypress/screenshots/\ncypress/videos/\nnode_modules/" > .gitignore
touch README.md
echo "# $1\n\nTBD." > README.md
npm init -y
npm i cypress -D
touch cypress.env.json
echo "{}" > cypress.env.json
touch cypress.env.example.json
echo "{}" > cypress.env.example.json
npx cypress open