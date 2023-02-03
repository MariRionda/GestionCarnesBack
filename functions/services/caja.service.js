const { db } = require("../db");

const getCaja = async () => {
    let caja = await db.collection('Caja').doc("1").get()
    return caja.data();
};


module.exports = {
    getCaja
}