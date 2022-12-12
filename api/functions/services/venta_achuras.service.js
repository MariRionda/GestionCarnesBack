const { db } = require("../db");

const getAllVentasAchuras = async () => {
    try{
        let ventas = await db.collection('VentasAchuras').get()
        let allVentas = await ventas.docs.map(a=>a.data())        
        return allVentas;
    }
    catch(err){
        return err
    }
};

const getVentaAchuras = async (id) => {
    let venta = await db.collection('VentasAchuras').doc(id).get()
    return venta.data();
};

const getAllVentasAchurasPorIDCliente = async (client_id) => {
    let datos = await db.collection('VentasAchuras').where("clienteID", "==", client_id).get()
    let ventas = datos.docs.map(a=>a.data())
    return ventas;
};

const crearVentaAchuras = async (data) => {
    try {
        await db.collection('VentasAchuras').doc(data.id).set(data)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const getAllVentasAchurasbyName = async (clientName) => {
    let datos = await db.collection('VentasAchuras').where("clien", "==", clientName).get()
    let ventas = datos.docs.map(a=>a.data())
    return ventas;
};

const eliminarVentaAchuras = async (venta_id) => {
    try {
        await db.collection("VentasAchuras").doc(venta_id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

    const actualizarSaldoVentaAchuras = async (id, saldo) => {
        try {
            await db.collection("VentasAchuras").doc(id).set({saldo:saldo},{merge: true})
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    module.exports = {
        getVentaAchuras,
        getAllVentasAchuras,
        getAllVentasAchurasPorIDCliente,
        getAllVentasAchurasbyName,
        crearVentaAchuras,
        actualizarSaldoVentaAchuras,
        eliminarVentaAchuras
    };