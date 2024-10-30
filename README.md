<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Um framework progressivo para <a href="http://nodejs.org" target="_blank">Node.js</a> para criar aplicações server-side eficientes e escaláveis.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença do Pacote" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads NPM" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Cobertura de Testes" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

## Descrição

Este projeto utiliza o framework NestJS para a construção de uma aplicação robusta e escalável no lado do servidor. O projeto foi configurado para integração com banco de dados PostgreSQL e é containerizado usando Docker para facilitar o desenvolvimento e o deployment.

## Link da aplicação backend

https://menu-reserva-api.onrender.com

## Configuração do Projeto

Para instalar as dependências do projeto, execute:

```bash
$ npm install
```

## Compilar e Executar o Projeto

Você pode iniciar o projeto nos seguintes modos:

```bash
# desenvolvimento
$ npm run start

# modo observador (watch)
$ npm run start:dev

# modo produção
$ npm run start:prod
```

## Executar Testes

Para rodar testes automatizados:

```bash
# testes unitários
$ npm run test

# testes end-to-end
$ npm run test:e2e

# cobertura dos testes
$ npm run test:cov
```

## Dependências

Explicação de cada dependência utilizada no projeto:

- **NestJS**: Framework para Node.js que fornece uma estrutura modular, usando TypeScript, para criar aplicações server-side escaláveis.
- **TypeScript**: Linguagem que adiciona tipos ao JavaScript, ajudando na criação de um código mais seguro e previsível.
- **TypeORM**: ORM (Object Relational Mapper) que facilita o mapeamento entre classes e tabelas do banco de dados.
- **ESLint**: Ferramenta de linting para manter o código limpo e identificar problemas de padrão e possíveis erros.
- **Swagger**: Ferramenta para documentar e testar APIs, com uma interface visual para os endpoints.
- **Class-validator**: Biblioteca para validar objetos e garantir que os dados sigam as regras e tipos esperados.
- **Class-transformer**: Utilizada para transformar e validar objetos JSON em classes e vice-versa.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar dados da aplicação.
- **Docker**: Plataforma de containerização que permite criar e rodar containers para facilitar o desenvolvimento e a implantação.
