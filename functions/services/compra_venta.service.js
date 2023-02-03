const { db } = require("../db");


//----------------------VENTAS

const getAllVentas = async () => {
    try {
        let dias = 30
        let fechaComparacion = Date.now()-dias*3600*24*1000
        let ventas = await db.collection('Ventas').where("fecha",">",fechaComparacion).get()
        let allVentas = await ventas.docs.map(a=>a.data())        
        return allVentas;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

const getAllVentasConSaldo = async () => {
    try {
        let ventas = await db.collection('Ventas').where("saldo",">",0).get()
        let allVentas = await ventas.docs.map(a=>a.data())        
        return allVentas;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}


const getAllVentasUltimos30Dias = async () => {
    try {
        const fechaDeComp30Dias = Date.now()-(30*24*3600*1000)
        let ventas = await db.collection('Ventas').where("fecha",">",fechaDeComp30Dias).get()
        let allVentas = await ventas.docs.map(a=>a.data()) 
        return allVentas;
    }
    catch (e) {
        console.log(e);
        return false;
    }
    }


const getVenta = async (id) => {
    let venta = await db.collection('Ventas').doc(id).get()
    return venta.data();
};

const getAllVentasPorIDCliente = async (client_id) => {
    let datos = await db.collection('Ventas').where("clienteID", "==", client_id).get()
    let ventas = datos.docs.map(a=>a.data())
    return ventas;
};

const getAllVentasbyName = async (clientName) => {
    let datos = await db.collection('Ventas').where("cliente", "==", clientName).get()
    let ventas = datos.docs.map(a=>a.data())
    return ventas;
};

const crearVenta = async (data) => {
    try {
        await db.collection("Ventas").doc(data.id).set(data)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarVenta = async (venta_id) => {
    try {
        await db.collection("Ventas").doc(venta_id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

    const actualizarSaldoVenta = async (id, saldo) => {
        try {
            await db.collection("Ventas").doc(id).set({saldo:saldo},{merge: true})
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

//--------------------------------

//-------------------------COMPRAS

const actualizarSaldoCompra = async (id, saldo) => {
    try {
        await db.collection("Compras").doc(id).set({saldo:saldo},{merge: true})
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const getAllCompras = async () => {
    try {
        let dias = 30
        let fechaComparacion = Date.now()-dias*3600*24*1000
        let compras = await db.collection('Compras').where("fecha",">",fechaComparacion).get()
        let allCompras = await compras.docs.map(a=>a.data())        
        return allCompras;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};

const getAllComprasConSaldo = async () => {
    try {
        let compras = await db.collection('Compras').where("saldo",">",0).get()
        let allCompras = await compras.docs.map(a=>a.data())        
        return allCompras;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

const getCompra = async (id) => {
    let compra = await db.collection('Compras').doc(id).get()
    return compra.data();
};

const getComprasPorProveedor = async (proveedor) => {
    let datos = await db.collection('Compras').where("proveedor", "==", proveedor).get()
    let compras = datos.docs.map(a=>a.data())
    return compras;
};

const crearCompra = async (data) => {
    try {
        await db.collection("Compras").doc(data.id).set(data)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarCompra = async (compra_id) => {
    try {
        await db.collection("Compras").doc(compra_id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};


module.exports = {
    getAllVentasConSaldo,
    getCompra,
    getAllCompras,
    getComprasPorProveedor,
    crearCompra,
    eliminarCompra,
    getVenta,
    getAllVentas,
    getAllVentasPorIDCliente,
    crearVenta,
    eliminarVenta,
    actualizarSaldoVenta,
    actualizarSaldoCompra,
    getAllVentasUltimos30Dias,
    getAllVentasbyName,
    getAllComprasConSaldo
};