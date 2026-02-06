# 🌐🇧🇷 [Versão Brasileira do README](README.md)
## 🌐🇺🇸 [English Version of README](README_EN.md)

# MCP-Todo-App

Este é um projeto para criar um servidor MCP com integração ao OpenAI Apps SDK e gerenciamento de tarefas. Ele fornece funcionalidades como autenticação de usuários, criação de tarefas e widgets interativos. O servidor permite registrar ferramentas e recursos automaticamente e inclui integração com componentes da interface do usuário, como carrosséis e resultados de pesquisa de produtos.

## 🔨 Funcionalidades do Projeto

- **Autenticação de usuários**: Ferramentas para registro de usuários e login utilizando JWT.
- **Gestão de tarefas**: Funcionalidades para criação, atualização, listagem e exclusão de tarefas, com suporte para JWT e TypeORM.
- **Widgets interativos**: Exemplos de widgets, como um carrossel de produtos e resultados de pesquisa.
- **Integração com OpenAI Apps SDK**: Total compatibilidade para criar widgets interativos com o SDK oficial da OpenAI.
- **Detecção de tema (claro e escuro)**: O tema do aplicativo se adapta automaticamente ao ChatGPT.

### 📸 Exemplo Visual do Projeto
	
<div align="center">
  <img src="" alt="Screenshot 2025-07-03 132707" width="80%" style="margin: 16px 0; border-radius: 10px;">
  <img src="" alt="Screenshot 2025-07-03 130932" width="80%" style="margin: 16px 0; border-radius: 10px;">
</div>

## ✔️ Técnicas e Tecnologias Utilizadas

- **Node.js**: Para a execução do servidor.
- **TypeScript**: Para garantir a segurança de tipos.
- **TypeORM**: Para gerenciamento de banco de dados e ORM.
- **JWT**: Para autenticação de usuários com tokens.
- **React**: Para criação dos widgets interativos.
- **Tailwind CSS**: Para estilização responsiva e fácil de implementar.
- **Zod**: Para validação de dados e props nos widgets.
- **SQLite**: Para banco de dados local de armazenamento de usuários e tarefas.

## 📁 Estrutura do Projeto

- **public/**
  - `favicon.ico`: Ícone do site.
  - `index.html`: Arquivo HTML principal.
  - **fruits/**: Imagens de frutas para o carrossel.
- **resources/**: Contém os widgets interativos.
  - `product-search-result/`: Exemplo de resultados de pesquisa de produtos.
    - `Accordion.tsx`: Componente de Acordeão.
    - `Carousel.tsx`: Componente de Carrossel.
    - `CarouselItem.tsx`: Componente para item no carrossel.
- **src/**
  - **database/**: Configurações e entidades do banco de dados.
    - `connection.ts`: Conexão com o banco de dados.
    - **entity/**: Entidades do banco de dados.
      - `User.ts`: Entidade de usuário.
      - `Task.ts`: Entidade de tarefa.
  - **tools/**: Ferramentas do servidor.
    - `auth.tools.ts`: Ferramentas de autenticação.
    - `task.tools.ts`: Ferramentas para gerenciamento de tarefas.

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
   - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
     
   ```bash
   node -v

* Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:

    * Copie a URL do repositório e execute o comando abaixo no terminal:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

3. **Instale as dependências**:

   Navegue até o diretório do projeto e instale as dependências:

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:

   Para rodar o servidor localmente, use:

   ```bash
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:3000`.

## 🌐 Deploy

Para fazer o deploy do projeto:

1. **Configure o ambiente de produção**:

    * Ajuste a variável de ambiente `MCP_URL` para o seu servidor de produção.

2. **Construa o projeto para produção**:

   ```bash
   npm run build
   ```

3. **Inicie o servidor de produção**:

   Para rodar o servidor em produção, use:

   ```bash
   npm start
   ```

Isso configurará e iniciará o servidor para produção.


