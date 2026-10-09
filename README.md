# Tasks Management System

Task management application built with TypeScript and NestJS. The project focuses on backend architecture, clean code, and scalable API design.

## Overview

This project implements task creation, update, listing, and deletion flows in a modular and maintainable structure. It is designed to study and apply professional NestJS development patterns, validation, and database integration.

## Tech Stack

- TypeScript
- NestJS
- Prisma
- Node.js
- PostgreSQL or MySQL
- pnpm

## Features

- Task creation
- Task listing and filtering
- Task updates
- Task deletion
- Task status tracking
- Validation with DTOs
- Data persistence with Prisma
- Structured modular architecture

## Project Structure

```text
src/
├── app.module.ts
├── main.ts
├── tasks/
│   ├── dto/
│   ├── entities/
│   ├── tasks.controller.ts
│   ├── tasks.module.ts
│   └── tasks.service.ts
└── prisma/
```

## Architecture

The application follows a layered approach:

```text
HTTP Request
  ↓
Controller
  ↓
Service
  ↓
Prisma / Database
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Database (PostgreSQL or MySQL)

### Installation

```bash
git clone https://github.com/GabrielVanderlinde/tasks-management.git
cd tasks-management
pnpm install
```

### Environment configuration

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/tasks_db"
PORT=3000
```

### Run the application

```bash
pnpm run start:dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create task |
| GET | `/tasks` | List tasks |
| GET | `/tasks/:id` | Get task by ID |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

## Best Practices Applied

- Clear separation between controller, service, and data access
- DTO validation
- Use of environment variables
- Clean code organization
- Maintainable NestJS module structure

## Development Notes

This project is part of a study path focused on learning NestJS, TypeScript backend development, and software design patterns.

## License

MIT

## Author

Gabriel Vanderlinde
