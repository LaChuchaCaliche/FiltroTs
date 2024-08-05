import { Sequelize } from 'sequelize-typescript';
import { User, Product, orders } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Campeon28.',
    database: 'Ensayo',
    models: [User, Product,orders], // Añade todos tus modelos aquí
});

export default sequelize;

