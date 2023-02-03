require("dotenv").config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { db } = require('../db');
// const { token } = require("morgan");

const authRegister = async (data) => {

    const salt = await bcrypt.genSalt(10);

    const pass = await bcrypt.hash(data.password, salt);

    
    // const isUserExist = await db.collection('Users').get().docs.find((a)=>a.data().name==data.name).data()

    // console.log(isUserExist)

    // if (isUserExist) {
    //     throw 'Usuario ya registrado';
    // } 

//crear usuario
    await db.collection("Users").doc(data.name).set({name:data.name, password: pass})

    try {
        return true;
    } catch (error) {
        throw error;
    }
};

const authLogin = async (data) => {
    
    const user = await (await db.collection('Users').where("name", "==", data.name).get()).docs[0].data()

    if (!user) throw Error('Usuario no encontrado');
    
    const validPassword = await bcrypt.compare(data.password, user.password);

    if (validPassword) console.log("validacion correcta")
    if (!validPassword) throw Error('contraseña no válida');

    const token = jwt.sign({
        name : data.name,
        id: user.id
    }, "Osjqbgk1brk1krncblqjgow91827461");


    console.log(token)
    return token;
    
};

module.exports = {
    authLogin,
    authRegister
};