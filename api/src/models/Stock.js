const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('stock', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tropa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATE,
      default: new Date().toLocaleDateString(),
      allowNull: true,
    },
    frigorifico: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detalle: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
    },
    total_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    }
  },{
    timestamps:false
  });
};
