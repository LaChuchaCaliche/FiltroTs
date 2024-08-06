import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
  } from "sequelize-typescript";
import { Cart } from "./carts";
import { Product } from "./product";
import { Order } from "./orders";
 
  
  @Table({
    tableName: "productCart",
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
  })
  export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    quantity!: number;
    @ForeignKey(()=>Cart)
    @Column({
      type: DataType.INTEGER,
      allowNull: false
    })
    cartId!:number
    @BelongsTo(()=>Cart)
    cart!:Cart
    @ForeignKey(()=>Product)
    @Column({
      type:DataType.INTEGER,
      allowNull:false
    })
    productId!:number
    @BelongsTo(()=>Product)
    product!:Product[];
  
    
  }