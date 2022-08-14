//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preguntas', {
    id_preguntas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo_orden: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    descripcion_corta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descripcion_larga: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    PREGUNTAS_CATEGORIA_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'preguntas_categoria',
        key: 'id_pre_cat'
      }
    },
    habilitado: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'preguntas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_preguntas_pk",
        unique: true,
        fields: [
          { name: "id_preguntas" },
        ]
      },
    ]
  });
};
