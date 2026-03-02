const express = require('express');
const router = express.Router();

// Rota: /users/ (pois já está dentro de /users no app.js)
router.get('/exec1', (req, res) => {
    res.json({
        titulo: "ENEM 2015",
        questao: "Uma população de bactérias dobra a cada hora. Se inicialmente havia 2^3 bactérias, quantas haverá após 5 horas",
        alternativas: "a) 2^5   b) 2^8   c)2^10   d) 2^13   e) 2^15",
        resposta: "B)2^8"
});
});

router.get('/exec2', (req, res) => {
    res.json({
        titulo: "Fuvest (USP) — 2012",
        questao: "O valor da expressão 2^10 + 2^10/2^9 é: ",
        alternativas: "a) 1 b) 2 c) 3 d) 4 e) 8",
        resposta: "e)4"
    });
});

router.get('/exec3', (req, res) => {
    res.json({
        titulo: "Unesp — 2017",
        questao: "Simplifique: 3^5 * 9^2 / 27",
         resposta: "3^6"
    });
});

router.get('/exec4', (req, res) => {
    res.json({
        titulo: "Unicamp — 2014",
        questao: "O valor de (2^3)^4 * 2^-5 é ",
        alternativas: "a)2^5  b)2^6  c)2^7  d)2^8  e)2^9",
        resposta: "c)2^7"
});
});

router.get('/exec5', (req, res) => {
    res.json({
        titulo: " ITA — 2010",
        questao: "Sabendo que x = 2^1/2, determine o valor de: x^6",
        alternativas: "a)2  b)4  c)8  d)16  e)32",
        resposta: "c)8"
});
});

// Rota: /users/perfil

module.exports = router;