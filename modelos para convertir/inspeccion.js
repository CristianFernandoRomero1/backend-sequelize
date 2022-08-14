//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inspeccion', {
    id_inspeccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Jefe_Trabajo: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Jefe_Sustituto: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    equipo_trabajo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Direccion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    trabajo_realizar: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    consignacion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    consignacion_odt: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cel_avantel: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    hora_inicial: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_final: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Conformidad: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    INSPECTORES_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inspectores',
        key: 'id_inspectores'
      }
    },
    CONTRATO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contrato',
        key: 'id_contrato'
      }
    },
    calificacion: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Departamento: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "OTRO"
    },
    Municipio: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "OTRO"
    },
    Zona: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "OTRO"
    }
  }, {
    sequelize,
    tableName: 'inspeccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_inspeccion_pk",
        unique: true,
        fields: [
          { name: "id_inspeccion" },
        ]
      },
    ]
  });
};
