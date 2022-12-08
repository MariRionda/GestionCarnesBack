const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('venta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detalle: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },{
    timestamps:false
  });
};
