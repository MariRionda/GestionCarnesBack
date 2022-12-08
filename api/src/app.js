const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes/index.js');
const { app } = require('firebase-admin');
const morgan = require('morgan');
const server = express();


server.name = 'API';

server.use(cors())
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


server.use(morgan('dev'))

server.use('/', routes);

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;






// db.collection("Faenas").doc("3").delete().then(() => {
//   console.log("Document successfully deleted!");
// }).catch((error) => {
//   console.error("Error removing document: ", error);
// });



// Add a new document in collection "cities"



//DATABASE CON SEQUALIZE--------------
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const routes = require('./routes/index.js');

// require('./db.js');
// server.name = 'API';

// server.use(cors())
// server.use(express.urlencoded({ extended: true, limit: '50mb' }));
// server.use(express.json({ limit: '50mb' }));
// server.use(cookieParser());
// server.use(morgan('dev'));
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); 
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

// server.use('/', routes);

// server.use((err, req, res, next) => { 
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });
//---------------------------


