const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pagoFaena', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    frigorifico:  {
        type: DataTypes.STRING,
        allowNull: true,
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
    faenaID:  {
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
