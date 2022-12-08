const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('ventaAchura', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clien: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    precioUnitario: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    saldo: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }
  },{
    timestamps:false
  });
};
