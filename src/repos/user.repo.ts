import { Repository } from "typeorm";
import { AppDataSource } from "../database/connection.js";
import { User } from "../database/entity/User.js";

export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }

  async create(email: string, passwordHash: string): Promise<User> {
    const user = this.repository.create({ email, passwordHash });
    return await this.repository.save(user);
  }

  async save(user: User): Promise<User> {
    return await this.repository.save(user);
  }
}
