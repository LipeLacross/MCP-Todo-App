# 🌐🇧🇷 [Versão Brasileira do README](README.md)
## 🌐🇺🇸 [English Version of README](README_EN.md)

# MCP-Todo-App

This project is designed to create an MCP server with OpenAI Apps SDK integration and task management. It provides features like user authentication, task creation, and interactive widgets. The server allows automatic registration of tools and resources, and includes integration with UI components like carousels and product search results.

## 🔨 Project Features

- **User Authentication**: Tools for user registration and login using JWT.
- **Task Management**: Features for creating, updating, listing, and deleting tasks, with JWT and TypeORM support.
- **Interactive Widgets**: Example widgets, such as a product carousel and search results.
- **OpenAI Apps SDK Integration**: Full compatibility for creating interactive widgets with OpenAI's official SDK.
- **Theme Detection (Light/Dark)**: The app's theme automatically adapts to ChatGPT's theme.

### 📸 Project Visual Example
	
<div align="center">
  <img src="" alt="Screenshot 2025-07-03 132707" width="80%" style="margin: 16px 0; border-radius: 10px;">
  <img src="" alt="Screenshot 2025-07-03 130932" width="80%" style="margin: 16px 0; border-radius: 10px;">
</div>

## ✔️ Technologies Used

- **Node.js**: For running the server.
- **TypeScript**: For ensuring type safety.
- **TypeORM**: For database management and ORM.
- **JWT**: For user authentication with tokens.
- **React**: For creating interactive widgets.
- **Tailwind CSS**: For responsive and easy-to-implement styling.
- **Zod**: For validating data and props in widgets.
- **SQLite**: For local database storage of users and tasks.

## 📁 Project Structure

- **public/**
  - `favicon.ico`: Website icon.
  - `index.html`: Main HTML file.
  - **fruits/**: Fruit images for the carousel.
- **resources/**: Contains the interactive widgets.
  - `product-search-result/`: Example product search results.
    - `Accordion.tsx`: Accordion component.
    - `Carousel.tsx`: Carousel component.
    - `CarouselItem.tsx`: Component for carousel items.
- **src/**
  - **database/**: Database configurations and entities.
    - `connection.ts`: Database connection.
    - **entity/**: Database entities.
      - `User.ts`: User entity.
      - `Task.ts`: Task entity.
  - **tools/**: Server tools.
    - `auth.tools.ts`: Authentication tools.
    - `task.tools.ts`: Task management tools.

## 🛠️ Running the Project

To run the project locally, follow these steps:

1. **Ensure Node.js is installed**:
   - [Node.js](https://nodejs.org/) is required to run the project. You can check if it is installed by running:

   ```bash
   node -v

* If not installed, download and install the recommended version.

2. **Clone the Repository**:

    * Copy the repository URL and run the following command in your terminal:

   ```bash
   git clone <REPOSITORY_URL>
   ```

3. **Install Dependencies**:

   Navigate to the project directory and install the dependencies:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   To run the server locally, use:

   ```bash
   npm run dev
   ```

   The server will be available at `http://localhost:3000`.

## 🌐 Deploy

To deploy the project:

1. **Configure the Production Environment**:

    * Set the `MCP_URL` environment variable for your production server.

2. **Build the Project for Production**:

   ```bash
   npm run build
   ```

3. **Start the Production Server**:

   To run the server in production, use:

   ```bash
   npm start
   ```

This will set up and start the server for production.

