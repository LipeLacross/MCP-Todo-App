import { z } from "zod";
import { MCPServer, text } from "mcp-use/server";
import { hashPassword, verifyPassword } from "../security/password.js";
import { signToken } from "../security/token.js";
import { UserRepository } from "../repos/user.repo.js";

type AuthCredentials = {
  email: string;
  password: string;
};

export function registerAuthTools(server: MCPServer): void {
  const userRepository = new UserRepository();

  server.tool(
    {
      name: "auth_register",
      description: "Create user (email/password) and return JWT token",
      schema: z.object({
        email: z.string().email(),
        password: z.string().min(6),
      })
    },
    async ({ email, password }: AuthCredentials) => {
      const existing = await userRepository.findByEmail(email);
      if (existing) return text("Error: email already registered");

      const passwordHash = hashPassword(password);
      const user = await userRepository.create(email, passwordHash);

      const token = signToken({ userId: user.id, email: user.email });
      return text(`User created! Token: ${token}`);
    }
  );

  server.tool(
    {
      name: "auth_login",
      description: "Login by email/password and return JWT token",
      schema: z.object({
        email: z.string().email(),
        password: z.string().min(1)
      })
    },
    async ({ email, password }: AuthCredentials) => {
      const user = await userRepository.findByEmail(email);
      if (!user || !verifyPassword(password, user.passwordHash)) {
        return text("Error: invalid credentials");
      }

      const token = signToken({ userId: user.id, email: user.email });
      return text(`Login successful! Token: ${token}`);
    }
  );
}
