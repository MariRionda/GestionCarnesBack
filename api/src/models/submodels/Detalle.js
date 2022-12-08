class DetallePagos {
    id;
    fecha;
    monto;
    formadepago;
}

class DetalleFaena {
    correlativo;
    categoria;
    kg;
}

class DetalleVenta {
    correlativo;
    categoria;
    total_media;
    kg;
    precio_kg;
    margen;
    saldo;
}

class DetalleStock {
    correlativo;
    categoria;
    kg;
}

module.exports = {
    DetalleFaena,
    DetalleVenta,
    DetallePagos,
    DetalleStock
}