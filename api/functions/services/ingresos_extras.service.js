const { db } = require("../db");

//-->Tae todos los pagos de todas las ventas
const getAllIngresosExtras = async () => {
    const ingresos = await db.collection('IngresosExtras').get()
    let allIngresos = await ingresos.docs.map(a=>a.data())
    return allIngresos;
};

//-->crear un nuevo pago de una venta
const crearIngresoExtra = async (data) => {
    try {
        await db.collection("IngresosExtras").doc(data.id).set(data)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


//-->eliminar un pago de una venta
const eliminarIngresoExtra = async (id) => {
    try {
        await db.collection("IngresosExtras").doc(id).delete()
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