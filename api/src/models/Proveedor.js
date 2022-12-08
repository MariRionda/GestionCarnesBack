const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('proveedor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cuil:{
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
    timestamps:false
  });
};
