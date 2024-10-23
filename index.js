
const express = require('express');
const app = express();


const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.get('/sobre', (req, res) => {
    res.send('Este é um servidor Node.js básico criado como parte de uma atividade prática!');
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
