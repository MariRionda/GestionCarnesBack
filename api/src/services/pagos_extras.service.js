const { db } = require("../db");

//-->Tae todos los pagos de todas las ventas
const getAllPagosExtras = async () => {
    const pagos = await db.collection('PagosExtras').get()
    let allPagos = await pagos.docs.map(a=>a.data())
    return allPagos;
};

//-->crear un nuevo pago de una venta
const crearPagoExtra = async (data) => {
    try {
        await db.collection("PagosExtras").doc().set(data)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

//-->eliminar un pago de una venta
const eliminarPagoExtra = async (id) => {
    try {
        await db.collection("PagosExtras").doc(id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


module.exports = {
    getAllPagosExtras,
    crearPagoExtra,
    eliminarPagoExtra
}