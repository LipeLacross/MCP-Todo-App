#!/usr/bin/env node

/**
 * Exemplo de uso das ferramentas MCP Todo App
 * Este script demonstra como usar as ferramentas de autenticação e tarefas
 */

// Exemplo de fluxo de autenticação e tarefas:
//
// 1. Registrar novo usuário:
//    - Chamar auth_register com email e senha
//    - Receber JWT token
//
// 2. Fazer login:
//    - Chamar auth_login com email e senha
//    - Receber JWT token
//
// 3. Criar tarefa:
//    - Chamar task_create com token, título e descrição
//    - Tarefa é associada ao usuário automaticamente
//
// 4. Listar tarefas:
//    - Chamar task_list com token
//    - Receber array de tarefas do usuário
//
// 5. Atualizar tarefa:
//    - Chamar task_update com token, taskId e campos a atualizar
//    - Validação garante que tarefa pertence ao usuário
//
// 6. Deletar tarefa:
//    - Chamar task_delete com token e taskId
//    - Validação garante que tarefa pertence ao usuário

console.log("MCP Todo App - Usage Example");
console.log("=============================\n");

console.log("Ferramentas disponíveis:\n");

console.log("Autenticação:");
console.log("  - auth_register: Registrar novo usuário");
console.log("  - auth_login: Fazer login\n");

console.log("Tarefas:");
console.log("  - task_create: Criar tarefa");
console.log("  - task_list: Listar tarefas");
console.log("  - task_update: Atualizar tarefa");
console.log("  - task_delete: Deletar tarefa\n");

console.log("Fluxo típico:");
console.log("1. auth_register (email, password) → token");
console.log("2. task_create (token, title, description) → task created");
console.log("3. task_list (token) → [tasks]");
console.log("4. task_update (token, taskId, title, completed) → task updated");
console.log("5. task_delete (token, taskId) → task deleted");
