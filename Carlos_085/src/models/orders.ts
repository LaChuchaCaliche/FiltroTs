import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    PrimaryKey,
    AutoIncrement,
  
} from 'sequelize-typescript';
import { User } from './user';
import { Product } from './product';
import { ProductCart } from './productCart';

@Table({
    tableName: 'orders',
    timestamps: false, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
    })
    id!:number;
    @Column({
        type: DataType.DECIMAL(10,2)
    })
    total!:number
    // @ForeignKey(() => User)
    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull: false,
    // })
    // userId!: number;
    // @BelongsTo(() => User)
    // user!: User;

    // @ForeignKey(()=>ProductCart)
    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull:false
    // })
    // ProductCartId!: number;
    // @BelongsTo (()=>ProductCart)
    // product!: Product;

}