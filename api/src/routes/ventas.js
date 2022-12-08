const { Router } = require('express');

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const {
    getVenta,
    getAllVentas,
    getAllVentasPorIDCliente,
    crearVenta,
    actualizarSaldoVenta,
    eliminarVenta,
    getAllVentasUltimos30Dias,
    getAllVentasbyName
} = require("../services/compra_venta.service.js")

const route = Router();

route.get('/all', async (req, res) => {
    try {

    return res.send(customResponseExito(await getAllVentas()))
    }
    catch{
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {    
        const ventas = await getVenta(id);
        
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
        if (client_id) {
            const ventas = await getAllVentasPorIDCliente(client_id);
            return res.send(customResponseExito(ventas))
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/all/name/:clientName', async (req, res) => {
    const { clientName } = req.params;

    try {
            let ventas = await getAllVentasbyName(clientName);
            return res.send(customResponseExito(ventas))
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.get('/ultimos30dias/all', async (req, res) => {

    try {
        return res.send(customResponseExito(await getAllVentasUltimos30Dias()))
        }
        catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
        }
})

route.post('/', async(req, res) => {
    try {
        if(await crearVenta(req.body)){
            return res.status(201).send(customResponseExito("Venta creada con éxito"));
        }
    }
    catch{
    return res.status(400).send(customResponseError("Error al crear la venta", 400));
    }
})

route.put('/saldo', async (req, res) => {
    const { id, saldo } = req.body
    try {
        if(await actualizarSaldoVenta(id, saldo)){
            return res.status(200).send(customResponseExito("Saldo de Venta actualizado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

route.delete('/:venta_id', async (req, res) => {
    const { venta_id } = req.params

    try {
        if(await eliminarVenta(venta_id)){
            return res.status(200).send(customResponseExito("Venta eliminada con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

module.exports = route;