const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('grupoDeRes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tropa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    frigorifico: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detalle: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
  },{
    timestamps:false
  });
};
