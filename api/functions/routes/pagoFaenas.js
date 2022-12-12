const { Router } = require('express');

const {
    getAllPagosFaenas,
    crearPagoFaena,
    getAllPagosFaenasByF,
    getAllPagosFaenaByID_F,
    eliminarPagoFaena
} = require("../services/pagos.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

//-->trae todos los pagos de faenas
route.get('/all', async (req, res) => {
    try{
    return res.send(customResponseExito(await getAllPagosFaenas()))
    }
    catch{
        return res.send("error")
    }
});

//-->Trae todos los pagos de una faena
route.get('/:faenaID', async (req, res) => {
    const { faenaID } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosFaenaByID_F(faenaID)))
    }
    catch{
        return res.send("error")
    }
});

//-->trae todos los pagos de un Frigorifico
route.get('/all/:frigorifico', async (req, res) => {
    const { frigorifico } = req.params
    try{
    return res.send(customResponseExito(await getAllPagosFaenasByF(frigorifico)))
    }
    catch{
        return res.send("error")
    }

});

//-->Crear pago de una faena
route.post('/', async (req, res) => {
    try{
    if(await crearPagoFaena(req.body)){
        return res.status(201).send(customResponseExito("Pago creado con éxito"));
    }
    }
    catch{
        return res.send("error")
    }
})

//--> eliminar el pago de una faena
route.delete('/', async (req, res) => {
    const { pf_id } = req.body

    try {
        if(await eliminarPagoFaena(pf_id)){
            return res.status(200).send(customResponseExito("Pago eliminado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;