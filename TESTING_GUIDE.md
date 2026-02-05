# Guia de Testes - MCP Todo App com TypeORM

## ✅ Validações Completadas

### Compilação TypeScript
```bash
npx tsc --noEmit
# ✅ Sem erros - Todos os tipos estão corretos
```

### Dependências Instaladas
```bash
npm list typeorm sqlite3
# ✅ typeorm@0.3.28
# ✅ sqlite3@5.1.7
```

## 🧪 Testando a Implementação

### 1. Iniciar o Servidor

```bash
npm run dev
```

Você deve ver:
```
Loading server from index.ts...
Database connection initialized
Server running on http://localhost:3000
```

### 2. Testar Autenticação

#### Registrar Novo Usuário

```bash
curl -X POST http://localhost:3000/tools/auth_register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123"
  }'
```

Resposta esperada:
```
User created! Token: eyJ0eXAiOiJKV1QiLCJhbGc...
```

#### Fazer Login

```bash
curl -X POST http://localhost:3000/tools/auth_login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123"
  }'
```

### 3. Testar Gerenciamento de Tarefas

#### Criar Tarefa (use o token do login acima)

```bash
curl -X POST http://localhost:3000/tools/task_create \
  -H "Content-Type: application/json" \
  -d '{
    "token": "SEU_TOKEN_AQUI",
    "title": "Implementar TypeORM",
    "description": "Configurar banco de dados SQLite com TypeORM"
  }'
```

Resposta esperada:
```
Task created: Implementar TypeORM (ID: 1)
```

#### Listar Tarefas

```bash
curl -X POST http://localhost:3000/tools/task_list \
  -H "Content-Type: application/json" \
  -d '{
    "token": "SEU_TOKEN_AQUI"
  }'
```

Resposta esperada:
```json
[
  {
    "id": 1,
    "title": "Implementar TypeORM",
    "description": "Configurar banco de dados SQLite com TypeORM",
    "completed": false,
    "createdAt": "2025-02-05T...",
    "updatedAt": null,
    "userId": 1
  }
]
```

#### Atualizar Tarefa

```bash
curl -X POST http://localhost:3000/tools/task_update \
  -H "Content-Type: application/json" \
  -d '{
    "token": "SEU_TOKEN_AQUI",
    "taskId": 1,
    "title": "TypeORM Implementado com Sucesso",
    "completed": true
  }'
```

#### Deletar Tarefa

```bash
curl -X POST http://localhost:3000/tools/task_delete \
  -H "Content-Type: application/json" \
  -d '{
    "token": "SEU_TOKEN_AQUI",
    "taskId": 1
  }'
```

## 🔍 Verificando o Banco de Dados

### 1. Visualizar arquivo SQLite

```bash
# Instalar sqlite3 CLI (se não tiver)
# Windows: choco install sqlite
# macOS: brew install sqlite
# Linux: sudo apt-get install sqlite3

sqlite3 database.sqlite
```

### 2. Dentro do sqlite3:

```sql
-- Ver tabelas
.tables

-- Ver schema de usuarios
.schema users

-- Ver schema de tarefas
.schema tasks

-- Listar usuários
SELECT id, email, createdAt FROM users;

-- Listar tarefas
SELECT id, userId, title, completed, createdAt FROM tasks;

-- Listar tarefas de um usuário específico
SELECT * FROM tasks WHERE userId = 1;

-- Sair
.quit
```

## 🐛 Debugging

### Ativar Logging do TypeORM

Edite `src/database/connection.ts`:
```typescript
export const AppDataSource = new DataSource({
  // ...
  logging: true,  // ← Mude para true
  // ...
});
```

Agora você verá todas as queries SQL sendo executadas.

### Verificar Logs do MCP

```bash
npm run dev 2>&1 | tee logs.txt
```

## ✨ Checklist de Implementação

- [x] TypeORM configurado com SQLite
- [x] Entidade User criada com relacionamentos
- [x] Entidade Task criada com Foreign Key
- [x] UserRepository implementado
- [x] TaskRepository implementado
- [x] auth.tools integrado com UserRepository
- [x] task.tools integrado com TaskRepository
- [x] Server inicializa AppDataSource
- [x] TypeScript compila sem erros
- [x] Segurança (JWT + autorização)
- [x] Documentação criada

## 🎯 Próximos Passos Recomendados

1. **Migrations**: 
   ```bash
   npm install typeorm-migrations
   ```
   Crie migrations para versionamento do schema

2. **Índices para Performance**:
   ```typescript
   @Index()
   @Column()
   email: string;
   ```

3. **Testes Unitários**:
   ```bash
   npm install jest ts-jest @types/jest
   ```

4. **Validação Adicional**:
   - Adicionar mais campos ao Zod schema
   - Implementar soft delete
   - Adicionar timestamps (createdAt, updatedAt)

5. **API Documentation**:
   - Adicionar Swagger/OpenAPI
   - Documentar respostas de erro

## 📚 Recursos Úteis

- [TypeORM Documentation](https://typeorm.io/)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [JWT Best Practices](https://tools.ietf.org/html/rfc7519)
- [MCP Protocol](https://modelcontextprotocol.io/)
