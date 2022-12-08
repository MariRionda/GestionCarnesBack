const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('faena', {
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
      type: DataTypes.STRING,
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
    costo_faena_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,    
    },
    detalle: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    total_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,    
    },
    total_medias: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    costo_total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    estado_compra:{
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  },{
    timestamps:false
  });
};
