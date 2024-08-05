import { Sequelize } from 'sequelize-typescript';
import { Cart,Entitie,Order,Product,ProductCart,Role,User } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: '5.161.244.18',
    username: 'root',
    password: 'mypassword',
    database: 'admin1',
    models: [User, Product,Order,Cart,Entitie,ProductCart,Role], // Añade todos tus modelos aquí
});

export default sequelize;

