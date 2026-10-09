# Tasks Management

API para gerenciamento de tarefas, desenvolvida com TypeScript e NestJS. O projeto explora organização modular, validação de dados e persistência com Prisma.

## Tecnologias

- Node.js
- TypeScript
- NestJS
- Prisma
- pnpm
- Banco de dados configurado por variável de ambiente

## Funcionalidades documentadas

- Criar, listar, consultar, atualizar e remover tarefas
- Validar dados de entrada com DTOs
- Organizar a aplicação em módulos, controllers e services
- Persistir dados com Prisma

## Pré-requisitos

- Node.js compatível com o projeto
- pnpm
- Banco de dados compatível com o schema Prisma

## Instalação

```bash
git clone https://github.com/GabrielVanderlinde/tasks-management.git
cd tasks-management
pnpm install
```

Crie um arquivo `.env` na raiz e configure a variável `DATABASE_URL` conforme o banco definido em `prisma/schema.prisma`. Exemplo ilustrativo para PostgreSQL:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/tasks_db"
PORT=3000
```

Gere o cliente Prisma conforme a configuração do projeto e execute em modo de desenvolvimento:

```bash
pnpm exec prisma generate
pnpm run start:dev
```

## Endpoints

Os caminhos abaixo representam as operações documentadas para tarefas; confirme os detalhes e parâmetros nos controllers da versão atual.

| Método | Rota | Operação |
| --- | --- | --- |
| POST | `/tasks` | Criar tarefa |
| GET | `/tasks` | Listar tarefas |
| GET | `/tasks/:id` | Consultar tarefa |
| PUT | `/tasks/:id` | Atualizar tarefa |
| DELETE | `/tasks/:id` | Remover tarefa |

## Objetivo

Projeto de estudo para aprofundar conhecimentos em NestJS, APIs REST, validação, Prisma e arquitetura backend.

## Autor

Gabriel Vanderlinde