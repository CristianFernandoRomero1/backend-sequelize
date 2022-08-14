import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize.js";

export const tablausuarios = sequelize.define(
  "tablausuarios",
  {
    IDusuario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      IDrol: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      usuario_insp: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      usuario_tec: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      usuario: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      nombre_usu: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      cedula: {
        type: DataTypes.STRING(12),
        allowNull: false
      },
      IDcontrato: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      estado_usu: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
  },
  {
    sequelize,
    tableName: 'tablausuarios',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IDusuario_pk",
        unique: true,
        fields: [
          { name: "IDusuario" },
        ]
      },
    ]
  }
);

