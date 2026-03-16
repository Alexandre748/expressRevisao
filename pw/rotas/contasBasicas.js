const express = require('express');
const router = express.Router();

// Rota: /users/ (pois já está dentro de /users no app.js)

//Usando body                                         
router.post('/exec1', (req, res) => {
    let { resposta } = req.body.resposta;

    const correta = "4";

     res.json({
        Exercicio: " Exercício 1 - 2^2 = 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })

});

                                          
router.post('/exec2', (req, res) => {
    let { resposta } = req.body.resposta;
    
    const correta = "27";

    res.json({
        Exercicio: "Exercício 2 -  = 3^3 = 3 * 3 * 3 = X",
        resposta: resposta,
        correta: correta
    })
});

router.post('/exec3', (req, res) => {

   let { resposta } = req.body.resposta;
    
    const correta = "9";

    res.json({
        Exercicio: "Exercício 3 -  = 3^2 = 3 * 3 = X",
        resposta: resposta,
        correta: correta
    })
});
router.post('/exec4', (req, res) => {

   let { resposta } = req.body.resposta;
    
    const correta = "8";

    res.json({
        Exercicio: "Exercício 4 - 2^3 = 2 * 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })
});

router.post('/exec5', (req, res) => {

   let { resposta } = req.body.resposta.resposta;
    
    const correta = "16";

    res.json({
        Exercicio: "Exercício 5 - 2^4 = 2 * 2 * 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })
});

router.post('/exec6', (req, res) => {

   let { resposta } = req.body.resposta;
    
    const correta = "32";

    res.json({
        Exercicio: "Exercício 6 - 2^5 = 2 * 2 * 2 * 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })
});

router.post('/exec7', (req, res) => {

   let { resposta } = req.body.resposta;
    
    const correta = "64";

    res.json({
        Exercicio: "Exercício 7 - 2^6 = 2 * 2 * 2 * 2 * 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })
});

router.post('/exec8', (req, res) => {

   let { resposta } = req.body.resposta;
    
    const correta = "128";

    res.json({
        Exercicio: "Exercício 8 - 2^7 = 2 * 2 * 2 * 2 * 2 * 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })
});

router.post('/exec9', (req, res) => {

   let { resposta } = req.body.resposta;
    
    const correta = "256";

    res.json({
        Exercicio: "Exercício 9 - 2^8 = 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })
});

//Query
router.get('/exec10', (req, res) => {
    
   let  resposta  = req.query.resposta;

   const correta = "512"

    res.json({
        Exercicio: "Exercício 10 -  = 2^9 = 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = X",
        resposta: resposta,
        correta: correta
    })
}
);

// Rota: /users/perfil

module.exports = router;