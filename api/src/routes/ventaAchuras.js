const { Router } = require('express');

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const {
    getVentaAchuras,
    getAllVentasAchuras,
    getAllVentasAchurasPorIDCliente,
    getAllVentasAchurasbyName,
    crearVentaAchuras,
    actualizarSaldoVentaAchuras,
    eliminarVentaAchuras
} = require("../services/venta_achuras.service.js")

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllVentasAchuras()))
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {    
        const ventas = await getVentaAchuras(id);
        
        if (ventas) {
            return res.json(customResponseExito(ventas));
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/all/:client_id', async (req, res) => {
    const { client_id } = req.params;

    try {
        const ventas = await getAllVentasAchurasPorIDCliente(client_id);
        
        if (ventas.length > 0) {
            return res.send(customResponseExito(ventas));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/all/name/:clientName', async (req, res) => {
    const { clientName } = req.params;

    try {
            let ventas = await getAllVentasAchurasbyName(clientName);
            return res.send(customResponseExito(ventas))
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async(req, res) => {
    try {
        if(await crearVentaAchuras(req.body)){
            return res.status(201).send(customResponseExito("Venta creada con éxito"));
        }
    }
    catch{
        return res.status(400).send(customResponseError("Error, compruebe que los datos sean correctos.", 400));
    }
})

route.put('/saldo', async (req, res) => {
    const { id, saldo } = req.body
    try {
        if(await actualizarSaldoVentaAchuras(id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de Venta actualizado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

route.delete('/:venta_id', async (req, res) => {
    const { venta_id } = req.params

    try {
        if(await eliminarVentaAchuras(venta_id)){
            return res.status(200).send(customResponseExito("Venta eliminada con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;