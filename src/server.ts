import { MCPServer } from "mcp-use/server";
import { config } from "./config";
import { AppDataSource } from "./database/connection";
import { registerAuthTools } from "./tools/auth.tools";
import { registerTaskTools } from "./tools/task.tools";

async function main() {
  // Initialize TypeORM connection
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("Database connection initialized");
  }

  const server = new MCPServer({
    name: "task-manager-api",
    version: "1.0.0",
    description: "MCP ToDo API with Authentication and Tasks",
    baseUrl: process.env.MCP_URL || `http://localhost:${config.port}`,
    favicon: "favicon.ico",
    icons: [
      {
        src: "icon.svg",
        mimeType: "image/svg+xml",
        sizes: ["512x512"],
      },
    ],
  });

  // Register authentication and task tools with TypeORM
  registerAuthTools(server);
  registerTaskTools(server);

  await server.listen();
  console.log(`Server running on http://localhost:${config.port}`);
}

main().catch(err => {
  console.error("Error starting the server:", err);
  process.exit(1);
});
