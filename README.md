# Tasks Management API

API REST para gerenciamento de projetos e tarefas, desenvolvida com NestJS e TypeScript. O projeto utiliza Prisma para persistência de dados e PostgreSQL como banco de dados, com modelos de projetos, tarefas, status e prioridade.

## Visão geral

O objetivo é praticar a construção de APIs backend com arquitetura modular, validação de entradas, persistência relacional e separação de responsabilidades entre controllers, services e camada de dados.

## Tecnologias

- Node.js
- TypeScript
- NestJS 11
- Prisma 6
- PostgreSQL
- class-validator e class-transformer
- Swagger
- pnpm
- Jest e Supertest
- Biome

## Funcionalidades

- Gerenciamento de projetos e tarefas
- Associação de tarefas a projetos
- Status de tarefa: `TODO`, `IN_PROGRESS` e `DONE`
- Prioridade: `LOW`, `MEDIUM` e `HIGH`
- Descrição e data de vencimento opcionais
- Identificadores UUID e datas de criação/atualização gerenciadas pelo banco/ORM

## Pré-requisitos

- Node.js compatível com o projeto
- pnpm
- PostgreSQL em execução

Confira a versão do Node recomendada pelo projeto e instale o pnpm caso ainda não esteja disponível.

## Instalação e execução

```bash
git clone https://github.com/GabrielVanderlinde/tasks-management.git
cd tasks-management
pnpm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/tasks_db"
PORT=3000
```

Crie previamente o banco `tasks_db` no PostgreSQL e substitua usuário e senha pelos valores do seu ambiente. A variável `DATABASE_URL` é exigida pelo schema do Prisma. Não publique credenciais reais.

Gere o Prisma Client e inicie a aplicação:

```bash
pnpm exec prisma generate
pnpm run start:dev
```

Para compilar para produção:

```bash
pnpm run build
pnpm run start:prod
```

## Endpoints

As rotas disponíveis devem ser confirmadas nos controllers da versão atual. Para evitar documentar contratos incorretos, consulte a implementação antes de integrar um cliente. As operações previstas para a API são:

| Recurso | Operações |
| --- | --- |
| Projetos | Criar, listar, consultar, atualizar e remover |
| Tarefas | Criar, listar, consultar, atualizar e remover |

A aplicação inclui a dependência do Swagger. Caso a documentação esteja habilitada no bootstrap, utilize a rota configurada no código para consultar os schemas, parâmetros e respostas reais.

## Modelo de dados

- **Project:** `id`, `name`, `description`, `createAt`, `updatedAt`
- **Task:** `id`, `title`, `description`, `status`, `priority`, `dueDate`, `createAt`, `updatedAt`, `projectId`

Cada tarefa está associada a um projeto. O schema define `TODO` como status padrão e `MEDIUM` como prioridade padrão.

## Testes e qualidade

```bash
pnpm test
pnpm test:e2e
pnpm test:cov
pnpm lint
```

Os comandos utilizam os scripts definidos no `package.json`. A execução efetiva depende das dependências instaladas e da configuração local.

## Estrutura do projeto

A aplicação segue a organização modular do NestJS. Os principais pontos para entender o fluxo são os módulos, controllers, services, DTOs e o schema em `prisma/schema.prisma`.

## Autor

**Gabriel Vanderlinde** · [GitHub](https://github.com/GabrielVanderlinde)

---

Projeto de aprendizado contínuo em desenvolvimento backend, APIs REST e persistência de dados.
