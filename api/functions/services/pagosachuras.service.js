const { db } = require("../db");

//-->Tae todos los pagos de todas las ventas
const getAllPagosVentasAchuras = async () => {
    const pagos = await db.collection('PagosVentasAchuras').get()
    let allPagos = await pagos.docs.map(a=>a.data())
    return allPagos;
};

//-->Tae todos los pagos de todas las ventas de un cliente
const getAllPagosVentaAchurasByC = async (clien) => {
    let datos = await db.collection('PagosVentasAchuras').where("clien", "==", clien).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};

//-->Tae todos los pagos de una venta
const getAllPagosVentaAchurasByID_V = async (ventaID) => {
    let datos = await db.collection('PagosVentasAchuras').where("ventaID", "==", ventaID).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};

//-->crear un nuevo pago de una venta
const crearPagoVentaAchuras = async (data) => {
    try {
        await db.collection("PagosVentasAchuras").doc(data.id).set(data)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


//-->eliminar un pago de una venta
const eliminarPagoVentaAchuras = async (id) => {
    try {
        await db.collection("PagosVentasAchuras").doc(id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


module.exports = {
    getAllPagosVentasAchuras,
    getAllPagosVentaAchurasByC,
    getAllPagosVentaAchurasByID_V,
    crearPagoVentaAchuras,
    eliminarPagoVentaAchuras
}