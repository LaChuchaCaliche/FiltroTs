import { injectable } from 'tsyringe';
import { Role } from '../models';


@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class RoleRepository {
    async findAll() {
        return await Role.findAll();
    }

    async findById(id: number) {
        return await Role.findByPk(id);
    }

    async create(role: Partial<Role>) {
        return await Role.create(role);
    }
    async update(id:number, updates: Partial<Role>){
        const role = await this.findById(id);
        if(!role) throw new Error('ProductCart not found');
        return await role.update(updates);
    }
    async delete(id:number){
        const role = await this.findById(id);
        if(!role) throw new Error('Product not found');
        return await role.destroy();
    }
}