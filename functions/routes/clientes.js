const { Router } = require('express');

const {
    getCliente,
    getAllClientes,
    crearCliente,
    eliminarCliente,
    editarCliente
} = require("../services/cliente_proveedor.service");
// subir cambios
const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();


route.get('/all', async (req, res) => {
    try{
        return res.send(customResponseExito(await getAllClientes()))
    }
    catch{
        return res.send("Error al traer los clientes");
    }
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const compras = await getCliente(id);
        
        if (compras) {
            return res.json(customResponseExito(compras));
        }
        else return res.status(404).json(customResponseError("No se ha encontrado el cliente", 404));
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async(req, res) => {
    try{
    if(await crearCliente(req.body)){
        return res.status(201).send(customResponseExito("Cliente creada con éxito"));
    }
    else return res.status(400).send(customResponseError("Error al crear el cliente", 400));
    }
    catch{
        return res.status(400).send(customResponseError("Error al crear el cliente", 400));
    }
})

route.delete('/', async (req, res) => {
    const { cliente_id } = req.body

    try {
        if(await eliminarCliente(cliente_id)){
            return res.status(200).send(customResponseExito("Cliente eliminado con éxito"));
        }
        else return res.status(400).send(customResponseError("Error al eliminar el Cliente", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.put('/', async (req, res) => {
    const json_data = req.body
    try {
        if(await editarCliente(json_data)){
            return res.status(200).send(customResponseExito("Cliente actualizado con éxito"));
        }
        else return res.status(400).send(customResponseError("Error al actualizar Cliente", 400));
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})


module.exports = route;