const express = require('express');
const router = express.Router();

// Rota: /users/ (pois já está dentro de /users no app.js)
router.get('/exec1', (req, res) => 
    res.json('Exercício 1 - 2^2 = 2 * 2 = 4')
);

router.get('/exec2', (req, res) => 
    res.json('Exercício 2 -  = 3^2 = 3 * 3 = 9')
);

router.get('/exec3', (req, res) => 
    res.json('Exercício 3 -  = 3^3 = 3 * 3 = 9')
);

router.get('/exec4', (req, res) => 
    res.json('Exercício 4 -  = 2^3 = 2 * 2 * 2 = 8')
);

router.get('/exec5', (req, res) => 
    res.json('Exercício 5 -  = 2^4 = 2 * 2 * 2 * 2 = 16')
);

router.get('/exec6', (req, res) => 
    res.json('Exercício 6 -  = 2^5 = 2 * 2 * 2 * 2 * 2 = 32')
);

router.get('/exec7', (req, res) => 
    res.json('Exercício 7 -  = 2^6 = 2 * 2 * 2 * 2 * 2 = 64')
);

router.get('/exec8', (req, res) => 
    res.json('Exercício 8 -  = 2^7 = 2 * 2 * 2 * 2 * 2 = 128')
);

router.get('/exec9', (req, res) => 
    res.json('Exercício 9 -  = 2^8 = 2 * 2 * 2 * 2 * 2 = 256')
);

router.get('/exec10', (req, res) => 
    res.json('Exercício 10 -  = 2^9 = 2 * 2 * 2 * 2 * 2 = 512')
);

// Rota: /users/perfil

module.exports = router;