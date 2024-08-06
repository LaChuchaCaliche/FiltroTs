import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasOne,
    HasMany,
  } from "sequelize-typescript";
import { Role } from "./roles";
import { Cart } from "./carts";
import { Order } from "./orders";
  @Table({
    tableName: "users",
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
  })
  export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @Column({
      type: DataType.STRING(200),
      allowNull: false,
      unique: true,
    })
    email!: string;
    @Column({
      type: DataType.STRING(200),
      allowNull: false
    })
    password!: string;
    @ForeignKey(()=>Role)
    @Column({
      type: DataType.INTEGER,
      allowNull:false
    })
    roleId!: number;
    @BelongsTo(()=>Role)
    role!:Role;
    @HasOne(()=>Cart)
    cart!:Cart[]

  }