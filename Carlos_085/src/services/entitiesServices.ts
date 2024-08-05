import { injectable, inject } from 'tsyringe';
import { Entitie } from '../models';
import EntitieRepository from '../repositories/entitiesRepository';


@injectable()
export default class EntitieServices {
    constructor(
        @inject(EntitieRepository) private entitieRepository: EntitieRepository) {}

    async getAllentities() {
        return await this.entitieRepository.findAll();
    }

    async getEntitieById(id: number) {
        return await this.entitieRepository.findById(id);
    }


    async createEntitie(entitie: Partial<Entitie>) {
        return await this.entitieRepository.create(entitie);
    }
    async updateEntitie(id:number,updates:Partial<Entitie>){
        return await this.entitieRepository.update(id,updates);
    }
    async deleteEntitie(id:number){
        return await this.entitieRepository.delete(id);
    }
}