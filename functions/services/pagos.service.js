const { db } = require("../db");
                        
//-------------PAGOS COMPRAS----------------------
//-->Tae todos los pagos de todas las compras
const getAllPagosCompras = async () => {
    let dias = 20
    let fechaComparacion = Date.now()-dias*3600*24*1000
    const pagos = await db.collection('PagosCompras').where("fecha",">",fechaComparacion).get()
    let allPagos = await pagos.docs.map(a=>a.data())
    return allPagos;
};

//-->Tae todos los pagos de todas las compras de un proveedor
const getAllPagosCompraByP = async (proveedor) => {
    let datos = await db.collection('PagosCompras').where("proveedor", "==", proveedor).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};

//-->Tae todos los pagos de una compra
const getAllPagosCompraByID_C = async (compraID) => {
    let datos = await db.collection('PagosCompras').where("compraID", "==", compraID).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};


//--------------------------------------------------------------------------------------------------------------------------------------------
//-->crear un nuevo pago
const crearPagoCompra = async (data) => {
    try {
        await db.collection("PagosCompras").doc(data.id).set(data)
        let total = await (await db.collection("Caja").doc("1").get()).data().total - data.monto*1
        await db.collection("Caja").doc("1").set({total:total, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};
//--------------------------------------------------------------------------------------------------------------------------------------------

//-->crear un nuevo pago
const crearPagoFaena = async (data) => {
    try {
        await db.collection("PagosFaenas").doc(data.id).set(data)
        let total = await (await db.collection("Caja").doc("1").get()).data().total - data.monto*1
        await db.collection("Caja").doc("1").set({total:total, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};
//------------------------------------------

//-->crear un nuevo pago de una venta
const crearPagoVenta = async (data) => {
    try {
        await db.collection("PagosVentas").doc(data.id).set(data)
        let total = await (await db.collection("Caja").doc("1").get()).data().total + data.monto*1
        await db.collection("Caja").doc("1").set({total:total, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


//-->eliminar un pago
const eliminarPagoCompra = async (data) => {
    try {
        await db.collection("PagosCompras").doc(data.id).delete()
        let saldo = await (await db.collection("Caja").doc("1").get()).data().total + data.monto*1
        await db.collection("Caja").doc("1").set({total:saldo, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
//------------------------------------------------
//-->eliminar un pago
const eliminarPagoFaena = async (data) => {
    try {
        await db.collection("PagosFaenas").doc(data.id).delete()
        let saldo = await (await db.collection("Caja").doc("1").get()).data().total + data.monto*1
        await db.collection("Caja").doc("1").set({total:saldo, fecha:Date.now()}) 
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

//-->eliminar un pago de una venta
const eliminarPagoVenta = async (data) => {
    try {
        await db.collection("PagosVentas").doc(data.id).delete()
        let saldo = await (await db.collection("Caja").doc("1").get()).data().total - data.monto*1
        await db.collection("Caja").doc("1").set({total:saldo, fecha:Date.now()}) 

        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

//-------------------PAGOS FAENAS--------------------------
//-->Tae todos los pagos de todas las faenas
const getAllPagosFaenas = async () => {
    let dias = 20
    let fechaComparacion = Date.now()-dias*3600*24*1000
    const pagos = await db.collection('PagosFaenas').where("fecha",">",fechaComparacion).get()
    let allPagos = await pagos.docs.map(a=>a.data())
    return allPagos;
};


//-->Tae todos los pagos de una faeneada
const getAllPagosFaenaByID_F = async (faenaID) => {
    let datos = await db.collection('PagosFaenas').where("faenaID", "==", faenaID).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};

//-->Tae todos los pagos de todas las faenas de un frigorifico
const getAllPagosFaenasByF = async (frigorifico) => {
    let datos = await db.collection('PagosFaenas').where("frigorifico", "==", frigorifico).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};


//-------------------PAGOS VENTAS--------------------------

//-->Tae todos los pagos de todas las ventas
const getAllPagosVentas = async () => {
    let dias = 20
    let fechaComparacion = Date.now()-dias*3600*24*1000
    const pagos = await db.collection('PagosVentas').where("fecha",">",fechaComparacion).get()
    let allPagos = await pagos.docs.map(a=>a.data())
    return allPagos;
};

//-->Tae todos los pagos de todas las ventas de un cliente
const getAllPagosVentaByC = async (cliente) => {
    let datos = await db.collection('PagosVentas').where("cliente", "==", cliente).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};

//-->Tae todos los pagos de una venta
const getAllPagosVentaByID_V = async (ventaID) => {
    let datos = await db.collection('PagosVentas').where("ventaID", "==", ventaID).get()
    let pagos = datos.docs.map(a=>a.data())
    return pagos;
};

module.exports = {
    getAllPagosCompras,
    getAllPagosCompraByP,
    crearPagoCompra,
    getAllPagosCompraByID_C,
    eliminarPagoCompra,
    getAllPagosFaenas,
    getAllPagosFaenaByID_F,
    getAllPagosFaenasByF,
    crearPagoFaena,
    eliminarPagoFaena,
    getAllPagosVentas,
    getAllPagosVentaByC,
    getAllPagosVentaByID_V,
    crearPagoVenta,
    eliminarPagoVenta
}
