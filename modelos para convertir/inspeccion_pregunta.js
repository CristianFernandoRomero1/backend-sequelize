//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inspeccion_pregunta', {
    id_ins_pre: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cumple: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    adjunto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    INSPECCION_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inspeccion',
        key: 'id_inspeccion'
      }
    },
    PREGUNTAS_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'preguntas',
        key: 'id_preguntas'
      }
    },
    verificado: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "No"
    },
    justificacion: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    evidencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_cierre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inspeccion_pregunta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_ins_pre_pk",
        unique: true,
        fields: [
          { name: "id_ins_pre" },
        ]
      },
    ]
  });
};
