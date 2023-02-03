const { db } = require("../db");

//CLIENTES

const getAllClientes = async () => {
    let clientes = await db.collection('Clientes').get()
    let allClientes = await clientes.docs.map(a=>a.data())
    return allClientes;
};

const getCliente = async (id) => {
    let cliente = await db.collection('Clientes').doc(id).get()
    return cliente.data();
};

const crearCliente = async (data) => {
    try {
        await db.collection("Clientes").doc(data.id).set(data)
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarCliente = async (cliente_id) => {
    try {
        await db.collection("Clientes").doc(cliente_id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const editarCliente = async (json_data) => {
    try {
        await db.collection("Clientes").doc(json_data.id).set(json_data,{merge: true})
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

//PROVEEDORES

const getAllProveedores = async () => {
    let proveedores = await db.collection('Proveedores').get()
    let allProveedores = await proveedores.docs.map(a=>a.data())
    return allProveedores;
};

const getProveedor = async (id) => {
    let proveedor = await db.collection('Proveedores').doc(id).get()
    return proveedor.data();
};

const crearProveedor = async (data) => {
    try {
        await db.collection("Proveedores").doc(data.id).set(data)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const eliminarProveedor = async (proveedor_id) => {
    try {
        await db.collection("Proveedores").doc(proveedor_id).delete()
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

    

    const editarProveedor = async (json_data) => {
        try {
            await db.collection("Proveedores").doc(json_data.id).set(json_data,{merge: true})
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };


module.exports = {
    getAllClientes,
    getCliente,
    crearCliente,
    eliminarCliente,
    getAllProveedores,
    getProveedor,
    crearProveedor,
    eliminarProveedor,
    editarCliente,
    editarProveedor
}
