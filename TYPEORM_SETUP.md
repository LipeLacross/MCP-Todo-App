# MCP Todo App - TypeORM Setup Guide

## Visão Geral

Esta aplicação usa **TypeORM** com banco de dados **SQLite** para gerenciar tarefas e autenticação de usuários.

## Estrutura do Banco de Dados

### Entidades

#### User
- `id` (PrimaryGeneratedColumn): Identificador único do usuário
- `email` (Column, unique): Email do usuário
- `passwordHash` (Column): Hash da senha (bcrypt)
- `createdAt` (Column): Data de criação
- `tasks` (OneToMany): Relação com tarefas do usuário

#### Task
- `id` (PrimaryGeneratedColumn): Identificador único da tarefa
- `title` (Column): Título da tarefa
- `description` (Column, nullable): Descrição da tarefa
- `completed` (Column, default: false): Status de conclusão
- `createdAt` (Column): Data de criação
- `updatedAt` (Column, nullable): Data da última atualização
- `userId` (Column, ForeignKey): ID do usuário proprietário
- `user` (ManyToOne): Relação com o usuário

## Repositórios

### UserRepository
Gerencia operações de usuário:
- `findByEmail(email)`: Encontrar usuário por email
- `findById(id)`: Encontrar usuário por ID
- `create(email, passwordHash)`: Criar novo usuário
- `save(user)`: Salvar alterações de usuário

### TaskRepository
Gerencia operações de tarefa:
- `createTask(userId, title, description)`: Criar nova tarefa
- `findTasksByUserId(userId)`: Listar tarefas de um usuário
- `findTaskById(id, userId)`: Encontrar tarefa específica
- `updateTask(id, userId, updates)`: Atualizar tarefa
- `deleteTask(id, userId)`: Deletar tarefa
- `save(task)`: Salvar alterações de tarefa

## Ferramentas MCP Disponíveis

### Autenticação
- **auth_register**: Registrar novo usuário com email/senha
- **auth_login**: Fazer login e obter JWT token

### Tarefas
- **task_create**: Criar nova tarefa
- **task_list**: Listar tarefas do usuário autenticado
- **task_update**: Atualizar tarefa (título, descrição, status)
- **task_delete**: Deletar tarefa

## Fluxo de Dados

```
MCP Server (index.ts)
    ↓
Server (src/server.ts) - Inicializa TypeORM
    ↓
AppDataSource (src/database/connection.ts) - Conexão SQLite
    ↓
Repositories (src/repos/)
    ├── UserRepository
    └── TaskRepository
    ↓
Entities (src/database/entity/)
    ├── User
    └── Task
```

## Padrão de Segurança

1. **Autenticação**: JWT (JSON Web Tokens)
2. **Criptografia**: bcrypt para senhas
3. **Autorização**: Verificação de token em cada operação de tarefa
4. **Isolamento de Dados**: Usuários só veem suas próprias tarefas

## Inicializar o Projeto

1. Instalar dependências:
   ```bash
   npm install
   ```

2. Copiar variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

3. Iniciar o servidor:
   ```bash
   npm run dev
   ```

O banco de dados SQLite será criado automaticamente em `./database.sqlite` na primeira execução.

## Observações Importantes

- **Sincronização Automática**: TypeORM está configurado com `synchronize: true`, o que sincroniza o esquema do banco automaticamente. Em produção, use migrations.
- **Logging**: Desativado por padrão. Ative em `src/database/connection.ts` alterando `logging: true` para debugging.
- **Constraints**: Relacionamentos com `onDelete: CASCADE` garantem que tarefas sejam deletadas ao deletar o usuário.

## Próximos Passos

1. Implementar migrations TypeORM para produção
2. Adicionar validação adicional nos schemas Zod
3. Implementar refresh tokens
4. Adicionar testes unitários
5. Implementar rate limiting
