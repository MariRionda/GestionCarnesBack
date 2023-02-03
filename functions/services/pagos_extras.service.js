const { db } = require("../db");

//-->Tae todos los pagos de todas las ventas
const getAllPagosExtras = async () => {
    let dias = 20
    let fechaComparacion = Date.now()-dias*3600*24*1000
    const pagos = await db.collection('PagosExtras').where("fecha",">",fechaComparacion).get()
    let allPagos = await pagos.docs.map(a=>a.data())
    return allPagos;
};

//-->crear un nuevo pago de una venta
const crearPagoExtra = async (data) => {
    try {
        await db.collection("PagosExtras").doc(data.id).set(data)
        let total = await (await db.collection("Caja").doc("1").get()).data().total - data.monto*1
        await db.collection("Caja").doc("1").set({total:total, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

//-->eliminar un pago de una venta
const eliminarPagoExtra = async (data) => {
    try {
        await db.collection("PagosExtras").doc(data.id).delete()
        let total = await (await db.collection("Caja").doc("1").get()).data().total + data.monto*1
        await db.collection("Caja").doc("1").set({total:total, fecha:Date.now()}) 
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