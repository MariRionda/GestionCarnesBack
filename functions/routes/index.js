const { Router } = require('express');
const clientes = require('./clientes');
const compras = require('./compras');
const faenas = require('./faenas');
const pagoCompras = require('./pagoCompras');
const pagoFaenas = require('./pagoFaenas');
const pagoVentas = require('./pagoVentas');
const pagoVentaAchuras = require('./pagoVentaAchura');
const pagoExtras = require('./pagoExtra')
const ingresoExtras = require('./ingresoExtra')
const proveedores = require('./proveedores');
const user = require('./user');
const ventas = require('./ventas');
const ventaAchuras = require('./ventaAchuras')
const caja = require('./caja')
const verifyToken = require('../middlewares/verify-token');


const router = Router();

router.use('/clientes', verifyToken, clientes);
router.use('/compras', verifyToken, compras);
router.use('/faenas', verifyToken, faenas);
router.use('/pagoCompras', verifyToken, pagoCompras);
router.use('/pagoFaenas', verifyToken, pagoFaenas);
router.use('/pagoVentas', verifyToken, pagoVentas);
router.use('/pagoVentaAchuras', verifyToken, pagoVentaAchuras);
router.use('/pagoExtras', verifyToken, pagoExtras);
router.use('/ingresoExtras', verifyToken, ingresoExtras);
router.use('/proveedores', verifyToken, proveedores);
router.use('/user', user);
router.use('/ventas', verifyToken, ventas);
router.use('/ventaAchuras', verifyToken, ventaAchuras);
router.use('/caja', verifyToken, caja);

module.exports = router;