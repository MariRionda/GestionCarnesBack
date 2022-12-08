const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('compra', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  proveedor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  n_dte: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cant_total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  kgv_brutos_totales: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  saldo: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  kgv_netos_totales: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  kg_carne_totales: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  cant_achuras: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  precio_venta_achuras_unit: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  recupero_precio_kg: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  costo_total_hac: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  costo_flete: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  costo_veps_unit: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  grupos: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: true,
  }
  },{
    timestamps:false
  });
};
