//passo a passo

//1. Importar app
//. declarar a variável "port" e atribuir o valor
//. "escutar" o app mostrando no console.log qual o caminho está sendo usado.

const app = require('./src/app');
const port =3000

app.listen(port, () => {
    console.log (`Executando em http://localhost:${port}`)
});