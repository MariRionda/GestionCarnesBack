const { Router } = require('express');

const { getCaja } = require("../services/caja.service");
// subir cambios
const {
    customResponseError,
    customResponseExito
} = require("../utils/customAPIResponse");

const route = Router();

route.get('/', async (req, res) => {
    try{
        return res.send(customResponseExito(await getCaja()))
    }
    catch{
        return res.send("Error al traer los clientes");
    }
})


module.exports = route;