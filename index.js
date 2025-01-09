const express = require('express');
const cors = require('cors');
const routerApi = require('./Routes')

const { logErrors, errorHandler, boomErrorHandler } = require ('./Middlewares/error.handler.js')

const app = express();
const port = 3000;

app.use(express.json());


const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    }else {
      callback(new Error('Aceso denegado'))
    }
  }
};
// Si el origen esta incluido en mi whitelist, dar acceso

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' +  port);
});
