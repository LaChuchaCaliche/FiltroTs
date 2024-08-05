import { injectable } from 'tsyringe';
import {Entitie} from '../models/entities';


@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class EntitieRepository {
    async findAll() {
        return await Entitie.findAll();
    }

    async findById(id: number) {
        return await Entitie.findByPk(id);
    }


    async create(entitie: Partial<Entitie>) {
        return await Entitie.create(entitie)
    }
    async update(id:number,updates:Partial<Entitie>){
        const entitie = await this.findById(id);
        if(!entitie) throw new Error('Entitie not found')
        return await entitie.update(updates)
    }
    async delete(id:number){
        const entitie = await this.findById(id);
        if(!entitie) throw new Error('Entitie not found');
        return await entitie.destroy();
    }
}