//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preguntas_categoria', {
    id_pre_cat: {
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
    }
  }, {
    sequelize,
    tableName: 'preguntas_categoria',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_pre_cat_pk",
        unique: true,
        fields: [
          { name: "id_pre_cat" },
        ]
      },
    ]
  });
};
