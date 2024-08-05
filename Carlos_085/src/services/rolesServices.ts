import { injectable,inject } from "tsyringe";
import RoleRepository from "../repositories/rolesRepository";
import { Role } from "../models";

@injectable()

export default class RoleService {
    constructor(@inject(RoleRepository) private roleRepository:RoleRepository){}
    async getAllRoles(){
        return this.roleRepository.findAll();
    }
    async getRolesById(id:number){
        return await this.roleRepository.findById(id);
    }
    async createRole(role:Partial<Role>){
        return await this.roleRepository.create(role)
    }
    async updateRole(id:number,updates:Partial<Role>){
        return await this.roleRepository.update(id,updates)
    }
    async deleteRole(id:number){
        return await this.roleRepository.delete(id);
    }
}