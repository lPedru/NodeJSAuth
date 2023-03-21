import { User } from "../../domain/userEntity";

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User> | '';
  getUserByEmail(email: string): Promise<User> | '';
  insertUser(user: User): Promise<void>;
  updateUser(user: User): Promise<User>;
}