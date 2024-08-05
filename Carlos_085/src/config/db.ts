import { Sequelize } from 'sequelize-typescript';
import { User, Product, Order } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: '5.161.244.18',
    username: 'root',
    password: 'mypassword',
    database: 'admin1,admin2,admin3',
    models: [User, Product,Order], // Añade todos tus modelos aquí
});

export default sequelize;

