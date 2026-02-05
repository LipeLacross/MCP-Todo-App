import { Repository } from "typeorm";
import { AppDataSource } from "../database/connection";
import { Task } from "../database/entity/Task";

export class TaskRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  async createTask(
    userId: number,
    title: string,
    description?: string
  ): Promise<Task> {
    const task = this.repository.create({
      userId,
      title,
      description,
    });
    return await this.repository.save(task);
  }

  async findTasksByUserId(userId: number): Promise<Task[]> {
    return this.repository.find({
      where: { userId },
      order: { createdAt: "DESC" },
    });
  }

  async findTaskById(id: number, userId: number): Promise<Task | null> {
    return this.repository.findOne({
      where: { id, userId },
    });
  }

  async updateTask(
    id: number,
    userId: number,
    updates: Partial<Task>
  ): Promise<Task | null> {
    await this.repository.update({ id, userId }, updates);
    return this.findTaskById(id, userId);
  }

  async deleteTask(id: number, userId: number): Promise<boolean> {
    const result = await this.repository.delete({ id, userId });
    return (result.affected ?? 0) > 0;
  }

  async save(task: Task): Promise<Task> {
    return await this.repository.save(task);
  }
}
