const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pagoVentaAchura', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha:  {
        type: DataTypes.STRING,
        allowNull: true,
    },
    monto:  {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    formaDePago:  {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clien:  {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ventaID:  {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    img_comp:{
      type: DataTypes.JSON,
      allowNull: true,
    }
  },{
    timestamps:false
  });
};