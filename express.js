const express = require('express');
const fs = require('fs');
const cors = require("cors");

const app = express();
const PORT = 8000;

const data = fs.readFileSync('ques.json')
let questions = JSON.parse(data)    
let dlugosc = questions.length

app.use(express.json())

app.use(cors());

app.get('/', function(req, res) {
  const hard = [4,25,42]
  let random = Math.floor(Math.random() * dlugosc)
  res.send({
    pytanie: questions[random].pytanie,
    odpowiedz: questions[random].odpowiedz
  });
});

app.post('/', function(req, res) {
  const { body } = req.body
  res.send({
    cialo: `twoje cialo ${body}`
  })
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});