import {
    PrimaryKey,
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript'; //En el anterior import realizamos un importe de lenguaje de base de datos para definir dentro de las clases
import { ProductCart } from './productCart';


@Table({
    tableName: 'products',//nombre de la tabla
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Product extends Model{
    @PrimaryKey //definimos primary key
    @AutoIncrement //definimos autoincrement
    @Column({
        type: DataType.INTEGER //definimos el datatype para sql
    })
    id!:number; //tipamos el id dentro de ts

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false,
    })
    price!: number;

    @Column({
        type:DataType.STRING,
    })
    description?: string;
    @Column({
        type:DataType.INTEGER
    })
    stock!:number;
    @HasMany(()=>ProductCart)
    ProductCart!:ProductCart[]
}