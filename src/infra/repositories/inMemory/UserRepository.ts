import { User } from "../../../domain/userEntity";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
  public users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
  async getUserById(id: string): Promise<User> {
    return this.users.filter((user) => user.id === id)[0];
  }
  async getUserByEmail(email: string): Promise<User> {
    return this.users.filter((user) => user.props.email === email)[0];
  }
  async insertUser(user: User): Promise<void> {
    this.users.push(user);
  }
  async updateUser(userData: User): Promise<User> {
    this.users.map((user) => {
      if (user.id === userData.id)
        user.props = userData.props;
    });
    return userData;
  }
}