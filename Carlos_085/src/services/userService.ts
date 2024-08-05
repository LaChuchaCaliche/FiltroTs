import UserRepository from "../repositories/userRepository";
import { injectable, inject } from "tsyringe";
import { User } from "../models/user";

@injectable()
export default class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number) {
    return await this.userRepository.findById(id);
  }

  async createUser(user: Partial<User>) {
    return await this.userRepository.create(user);
  }
  async updateUser(id:number,updates:Partial<User>){
    return await this.userRepository.update(id,updates);
    }
  async deleteUser(id:number){
    return await this.userRepository.delete(id);
  }
  }


