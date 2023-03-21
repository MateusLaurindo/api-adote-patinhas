import express from "express";
//CRUD(Create, read, update and delete)
const app = express();

app.use(express.json())

const jogos = [
    {id: 1, "titulo": "Zelda"},
    {id: 2, "titulo": "Mega Man"}
]

app.get('/', (req, res) => {
    res.status(200).send('Locadora de jogos');
})

app.get('/Jogos', (req, res) => {
    res.status(200).json(jogos);
})

app.post('/jogos', (req, res) => {
    jogos.push(req.body);
    res.status(201).send('jogo cadastrado com sucesso')
})

export default app
