import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
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
    @ForeignKey(()=>Rol)
    @Column({
      type: DataType.INTEGER,
      allowNull:false
    })
    roleId!: number;
    @BelongsTo(()=>Rol);
    role!:Rol;
    
  }