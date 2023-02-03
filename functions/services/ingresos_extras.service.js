const { db } = require("../db");

//-->Tae todos los pagos de todas las ventas
const getAllIngresosExtras = async () => {
    let dias = 20
    let fechaComparacion = Date.now()-dias*3600*24*1000
    const ingresos = await db.collection('IngresosExtras').where("fecha",">",fechaComparacion).get()
    let allIngresos = await ingresos.docs.map(a=>a.data())
    return allIngresos;
};


//-->crear un nuevo pago de una venta
const crearIngresoExtra = async (data) => {
    try {
        await db.collection("IngresosExtras").doc(data.id).set(data)
        let total = await (await db.collection("Caja").doc("1").get()).data().total + data.monto*1
        await db.collection("Caja").doc("1").set({total:total, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

//-->eliminar un pago de una venta
const eliminarIngresoExtra = async (data) => {
    try {
        await db.collection("IngresosExtras").doc(data.id).delete()
        let total = await (await db.collection("Caja").doc("1").get()).data().total - data.monto*1
        await db.collection("Caja").doc("1").set({total:total, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


module.exports = {
    getAllIngresosExtras,
    crearIngresoExtra,
    eliminarIngresoExtra
}