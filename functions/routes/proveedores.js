const { Router } = require('express');


const {
    getProveedor,
    getAllProveedores,
    crearProveedor,
    eliminarProveedor,
    editarProveedor
} = require("../services/cliente_proveedor.service");

const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/all', async (req, res) => {
    return res.send(customResponseExito(await getAllProveedores()))
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const compras = await getProveedor(id);
        if (compras) {
            return res.json(customResponseExito(compras));
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.post('/', async(req, res) => {
    try{
        if(await crearProveedor(req.body)){
            
                return res.status(201).send(customResponseExito("Proveedor creado con éxito"));
            }
    }
    catch{
        return res.send("error")
    }
})


route.delete('/', async (req, res) => {
    const { proveedor_id } = req.body

    try {
        if(await eliminarProveedor(proveedor_id)){
            return res.status(200).send(customResponseExito("Proveedor eliminado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto.", 400));
    }
})

route.put('/', async (req, res) => {
    const json_data = req.body
    try {
        if(await editarProveedor(json_data)){
            return res.status(200).send(customResponseExito("Proveedor actualizado con éxito"));
        }
    } catch (error) {
        return res.status(400).send(customResponseError("Error, compruebe que el id que desea buscar es correcto o verifique que el saldo esté escrito correctamente.", 400));
    }
})

module.exports = route;