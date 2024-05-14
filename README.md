# Projeto Genus Frontend

Este é o frontend do projeto Genus, uma página web desenvolvida em ReactJS que serve como interface para o cadastro de usuários em um sistema. O projeto inclui funcionalidades para cadastrar novos usuários e exibir uma lista dos usuários cadastrados.

## Tecnologias Utilizadas

- ReactJS: Biblioteca JavaScript para construção de interfaces de usuário.
  [![ReactJS](https://img.shields.io/badge/ReactJS-^18.3.1-blue.svg)](https://reactjs.org/)
- Styled Components: Biblioteca para estilização de componentes React.
  [![Styled Components](https://img.shields.io/badge/Styled%20Components-^6.1.10-orange.svg)](https://styled-components.com/)
- React Router Dom: Biblioteca para gerenciamento de rotas no React.
  [![React Router Dom](https://img.shields.io/badge/React%20Router%20Dom-^6.23.1-green.svg)](https://reactrouter.com/)
- React Grid System: Sistema de grid para posicionamento de elementos nas telas.
  [![React Grid System](https://img.shields.io/badge/React%20Grid%20System-^8.2.0-red.svg)](https://github.com/sealninja/react-grid-system)
- Axios: Biblioteca JavaScript para fazer requisições HTTP.
  [![Axios](https://img.shields.io/badge/Axios-^1.6.8-yellow.svg)](https://axios-http.com/)

## Como Executar o Projeto

1. Clone este repositório:

```
git clone https://github.com/pedroquintao/projeto-genus-frontend.git
```

2. Instale o NVM (Node Version Manager) (caso não tenha instalado):

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

3. Instale a versão do Node.JS especificada no arquivo .nvmrc:

```
nvm install
```

> Observação: Se você já possuir instalada a versão do Node.JS igual a versão do projeto, quando executar o nvm install a versão atual do seu Node.JS apenas será alterada para a versão que está incluída no arquivo .nvmrc.
> Para ativar automaticamente a versão do Node.js especificada no arquivo `.nvmrc`, basta navegar até o diretório do projeto e executar o comando `nvm use`. Por exemplo:

4. Instale as dependências utilizando npm ou yarn:

```
npm install
```
  ou
```
yarn install
```

5. Execute o projeto:

```
npm start
```
  ou
```
yarn start
```

O projeto será executado em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizá-lo.

## Configuração do Backend

Este projeto frontend espera que o backend esteja em execução. Certifique-se de que o backend esteja em execução e configurado corretamente. Para executar o backend, siga as instruções no [repositório do projeto Genus Backend](https://github.com/pedroquintao/projeto-genus-backend). Por padrão, a URL do backend é `http://localhost:8080`.

