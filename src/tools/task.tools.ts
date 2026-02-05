import { z } from "zod";
import { MCPServer, text } from "mcp-use/server";
import { verifyToken } from "../security/token.js"; // Adicionando a extensão .js
import { TaskRepository } from "../repos/task.repo.js";

export function registerTaskTools(server: MCPServer): void {
  const taskRepository = new TaskRepository();

  server.tool(
    {
      name: "task_create",
      description: "Create a task for the authenticated user",
      schema: z.object({
        token: z.string(),
        title: z.string(),
        description: z.string().optional(),
      })
    },
    async ({ token, title, description }: { token: string; title: string; description?: string }) => {
      const payload = verifyToken(token);
      if (!payload) {
        return text("Error: Invalid or expired token");
      }

      const task = await taskRepository.createTask(payload.userId, title, description);

      return text(`Task created: ${task.title} (ID: ${task.id})`);
    }
  );

  server.tool(
    {
      name: "task_list",
      description: "List tasks for the authenticated user",
      schema: z.object({
        token: z.string(),
      })
    },
    async ({ token }: { token: string }) => {
      const payload = verifyToken(token);
      if (!payload) {
        return text("Error: Invalid or expired token");
      }

      const tasks = await taskRepository.findTasksByUserId(payload.userId);

      return text(JSON.stringify(tasks, null, 2));
    }
  );

  server.tool(
    {
      name: "task_update",
      description: "Update a task (title, description, or completion status)",
      schema: z.object({
        token: z.string(),
        taskId: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        completed: z.boolean().optional(),
      })
    },
    async ({ token, taskId, title, description, completed }: {
      token: string;
      taskId: number;
      title?: string;
      description?: string;
      completed?: boolean;
    }) => {
      const payload = verifyToken(token);
      if (!payload) {
        return text("Error: Invalid or expired token");
      }

      // Verify task belongs to user
      const task = await taskRepository.findTaskById(taskId, payload.userId);

      if (!task) {
        return text("Error: Task not found or does not belong to user");
      }

      const updates: Partial<any> = {};
      if (title !== undefined) updates.title = title;
      if (description !== undefined) updates.description = description;
      if (completed !== undefined) updates.completed = completed;

      const updated = await taskRepository.updateTask(taskId, payload.userId, updates);

      return text(`Task updated: ${updated?.title}`);
    }
  );

  server.tool(
    {
      name: "task_delete",
      description: "Delete a task",
      schema: z.object({
        token: z.string(),
        taskId: z.number(),
      })
    },
    async ({ token, taskId }: { token: string; taskId: number }) => {
      const payload = verifyToken(token);
      if (!payload) {
        return text("Error: Invalid or expired token");
      }

      // Verify task belongs to user
      const task = await taskRepository.findTaskById(taskId, payload.userId);

      if (!task) {
        return text("Error: Task not found or does not belong to user");
      }

      await taskRepository.deleteTask(taskId, payload.userId);

      return text(`Task deleted: ${task.title}`);
    }
  );
}
