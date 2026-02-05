import { DataSource } from "typeorm";
import { User } from "./entity/User.js"; // Adicionando a extensão .js
import { Task } from "./entity/Task.js"; // Adicionando a extensão .js

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true,
  logging: false,
  entities: [User, Task],
  subscribers: [],
  migrations: [],
});
