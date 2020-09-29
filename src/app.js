// passo-a-passo

//1. importar o express
//2. declarar a variável app atribuindo o método express
//3. importar a rota
//4. usar a rota criada
//5. exportar o app

const express = require('express');
const app = express();

const lendasPe = require('./routes/lendasPeRoutes');

app.use('/', lendasPe);


//
app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })

});

module.exports = app
