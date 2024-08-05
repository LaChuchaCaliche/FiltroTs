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

@Table({
    tableName: 'orders',
    timestamps: false, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class orders extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
    })
    id!:number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;
    @ForeignKey(()=>Product)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    productId!: number;

    @BelongsTo(()=>Product)
    product!:Product;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}