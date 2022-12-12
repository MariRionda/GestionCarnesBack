const { Router } = require('express');

const {
    getAllPagosVentasAchuras,
    getAllPagosVentaAchurasByC,
    getAllPagosVentaAchurasByID_V,
    crearPagoVentaAchuras,
    eliminarPagoVentaAchuras
} = require("../services/pagosachuras.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos de ventas
route.get('/all', async (req, res) => {
    try{
    return res.send(customResponseExito(await getAllPagosVentasAchuras()))
    }
    catch{
        return res.send("error")
    }
});

//-->Trae todos los pagos de una venta
route.get('/:ventaID', async (req, res) => {
    const { ventaID } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosVentaAchurasByID_V(ventaID)))
    }
    catch{
        return res.send("error")
    }
});

//-->trae todos los pagos de un Cliente
route.get('/all/:clien', async (req, res) => {
    const { clien } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosVentaAchurasByC(clien)))
    }
    catch{
        return res.send("error")
    }
});

//-->Crear pago de una venta
route.post('/', async (req, res) => {
    try{
    if(await crearPagoVentaAchuras(req.body)){
        return res.status(201).send(customResponseExito("Pago creado con éxito"));
    }
    }
    catch{
        return res.send("error")
    }
})

//--> eliminar el pago de una venta
route.delete('/', async (req, res) => {
    const { pv_id } = req.body

    try {
        if(await eliminarPagoVentaAchuras(pv_id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;