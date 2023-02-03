const { db } = require('../db');

const getAllFaenas = async () => {
    let dias = 80 //volver a cambiar a 30!!!!
    let fechaComparacion = Date.now()-dias*3600*24*1000
    const faenas = await db.collection('Faenas').where("fecha",">",fechaComparacion).get()
    let allFaenas = await faenas.docs.map(a=>a.data())
    return allFaenas;
};

const getAllFaenasConSaldo = async () => {
    const faenas = await db.collection('Faenas').where("saldo", ">", 0).get()
    let allFaenas = await faenas.docs.map(a=>a.data())
    return allFaenas;
};

const getAllFaenasPorNTropa = async (nTropa) => {
    let datos = await db.collection('Faenas').where("tropa", "==", nTropa).get()
    let faena = datos.docs[0].data()
    return faena;
};

const getFaenasUltimasVeinteDias = async () => {
    let fechaComparacion = Date.now()-(3600*1000*24*20)
    const faenas = await db.collection('Faenas').where("fecha", ">", fechaComparacion).get()
    let allFaenas = await faenas.docs.map(a=>a.data())
    return allFaenas;
};

const crearFaena = async (data) => {
    try {
            await db.collection("Faenas").doc(data.tropa).set(data)
            return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarFaena = async (faena_id) => {
    try {
        await db.collection("Faenas").doc(faena_id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const actualizarSaldoFaena = async (id, saldo) => {
    try {
        await db.collection("Faenas").doc(id).set({saldo:saldo},{merge: true})
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const actualizarDetalleFaena = async (id, detalle) => {
    try {
        console.log(id, detalle)
        await db.collection("Faenas").doc(id.toString()).set({detalle:detalle},{merge: true})
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const actualizarEstadoCompraFaena = async (id, estadoCompra, compraID) => {
    try {
        console.log(id)
        await db.collection("Faenas").doc(id).set({estadoCompra: estadoCompra, compraID: compraID},{merge: true})
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

module.exports = {
    getAllFaenas,
    getAllFaenasPorNTropa,
    crearFaena,
    eliminarFaena,
    actualizarSaldoFaena,
    actualizarEstadoCompraFaena,
    actualizarDetalleFaena,
    getFaenasUltimasVeinteDias,
    getAllFaenasConSaldo
}