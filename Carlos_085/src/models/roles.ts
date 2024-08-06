import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from "sequelize-typescript";
import { User } from "./user";
  
  @Table({
    tableName: "role",
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
  })
  export class Role extends Model {
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
    name!: string;
    @HasMany(()=>User)
    user!:User[];
  }