import {
    PrimaryKey,
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    AutoIncrement,
} from 'sequelize-typescript'; //En el anterior import realizamos un importe de lenguaje de base de datos para definir dentro de las clases
import { User } from './user';
import { autoInjectable } from 'tsyringe';
import { timeStamp } from 'console';

@Table({
    tableName: 'products',
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Product extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}