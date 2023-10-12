/*function resolvePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise dentro do setTimeout')
        }, 5000);
    })
}

resolvePromise().then(resultado => console.log(resultado)); 
console.log("oi");
console.log('oi'); 
*/ // SINCRONO

const express = require('express');
const { getPoke } = require('./src/external-services/poke-api'); 

const server = express();

server.get('/pokemon/habilidades/:pokemon', async (req, res) => {
    const params = req.params;
    const queries = req.query; 
    const abilities = await getPoke(params.pokemon, queries.slot); //açao bloqueate
    return res.send(abilities); 
})

server.listen(3333); 