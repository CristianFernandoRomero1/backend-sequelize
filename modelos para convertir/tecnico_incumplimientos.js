//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tecnico_incumplimientos', {
    id_tec_inc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tecnicos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_inspeccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inspeccion',
        key: 'id_inspeccion'
      }
    }
  }, {
    sequelize,
    tableName: 'tecnico_incumplimientos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_tec_inc_pk",
        unique: true,
        fields: [
          { name: "id_tec_inc" },
        ]
      },
    ]
  });
};
