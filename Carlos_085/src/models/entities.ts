import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
  } from "sequelize-typescript";
  @Table({
    tableName: "entities",
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
  })
  export class Entitie extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @Column({
      type: DataType.STRING,
      allowNull:false
    })
    name!: string;
  
  }