const { Router } = require('express');

const {
    getAllPagosExtras,
    crearPagoExtra,
    eliminarPagoExtra
} = require("../services/pagos_extras.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos extras
route.get('/all', async (req, res) => {
    try{
    return res.send(customResponseExito(await getAllPagosExtras()))
    }
    catch{
        return res.send("error")
    }
});

//-->Crear pago extra
route.post('/', async (req, res) => {
    try{
        if(await crearPagoExtra(req.body)){
            return res.status(201).send(customResponseExito("Pago creado con éxito"));
        }
    }
    catch{
        return res.send("error")
    }
})

//--> eliminar el pago extra
route.delete('/', async (req, res) => {
    const { id } = req.body

    try {
        if(await eliminarPagoExtra(id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;