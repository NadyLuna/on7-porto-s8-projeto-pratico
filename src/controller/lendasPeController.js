//passo-a-passo

//1: importar o Json de LendasPe.
//2: criar o método para buscar as lendasPe;
//3: exportar o método

// ./ retorna arquivos ou pastas do mesmo diretório
//../ retorna arquivos ou pastas de um diretório acima

const lendasPe = require("../model/lendasPe.json");
const lenda = require("../model/lendas.json");

const getAll = (req, res) => {
    console.log(req.url);
    // verifica se a resposta tem status 200 (sucesso) e envia o JSON
    res.status(200).send(lendasPe);
};

//passo-a-passo

//1. Criar método gtByID
//2. Retornar o item daquele ID

const getByID = (req, res) => {
    const id = req.params.id

    //método find retorna o primeiro elemento que passa na condição

    const lendasFiltrada = lendasPe.find((lendasPe) => lendasPe.id == id)
    res.status(200).send(lendasFiltrada); 
}

//1. criar método getAllLocal
//2. filtrar lista de locais das lendas

const getAllLocal = (req,res) => {
    res.status(200).send(lenda)
}

// 1.criando método para filtrar por parâmetro (filtro por cidade)

const getByCidade = (req,res) => {
    const cidade = req.params.cidade
    const cidadeFiltrada = lendasPe.filter((lendas) => lendas.cidade == cidade)

    res.status(200).send(cidadeFiltrada)
}

//1. Criar Método getAllNomeLendas
//2. Retornar somente o nome das lendas da lista de LendasPe.

const getAllNomeLendas = (req, res ) => {
    const nomeLenda = lendasPe.map((lenda) => lenda.nomeLenda)
    res.status(200).send(nomeLenda)
}

module.exports = { 
    getAll, getByID, getAllLocal, getByCidade, getAllNomeLendas

};


