const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
      console.log('Servidor iniciado en puerto ' + PORT);
    });

// conn.sync({ force: false }).then(() => {
//   server.listen(PORT, () => {
//     console.log('Servidor iniciado en puerto ' + PORT);
//   });
// });
