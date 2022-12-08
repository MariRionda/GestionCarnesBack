const { Router } = require('express');

const {
    getAllPagosCompras,
    getAllPagosCompraByP,
    getAllPagosCompraByID_C,
    crearPagoCompra,
    eliminarPagoCompra
} = require("../services/pagos.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos de compras
route.get('/all', async (req, res) => {
    try{
    return res.send(customResponseExito(await getAllPagosCompras()))
    }
    catch{
        return res.send("error")
    }
});

//-->Trae todos los pagos de una compra
route.get('/:compraID', async (req, res) => {
    const { compraID } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosCompraByID_C(compraID)))
    }
    catch{
        return res.send("error")
    }
});

//-->trae todos los pagos de un Proveedor
route.get('/all/:proveedor', async (req, res) => {
    const { proveedor } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosCompraByP(proveedor)))
    }
    catch{
        return res.send("error")
    }
});

//-->Crear pago de una compra
route.post('/', async (req, res) => {
  
    try{
    if(await crearPagoCompra(req.body)){
        return res.status(201).send(customResponseExito("Pago creado con éxito"));
    }
    }
    catch{
        return res.send("error")
    }
})

//--> eliminar el pago de una compra
route.delete('/', async (req, res) => {
    const { pc_id } = req.body

    try {
        if(await eliminarPagoCompra(pc_id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;