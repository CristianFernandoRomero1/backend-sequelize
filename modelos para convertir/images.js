//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image_text: {
      type: DataTypes.TEXT,
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
    tableName: 'images',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_images_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
