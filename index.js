const express = require('express');

const app = express()

app.use(
    express.urlencoded({
        extended: true
    }
    )
)

app.use(express.json())


app.get("/", async (req, res) => {
    res.json('Rotas disponíveis: /contasBasicas/exec1 ao 10, /propriedades, /contasVestibulares/exec1 ao 10')
})

app.get("/propriedades", async (req, res) => {
    res.json({
        explicacao: "As propriedades da potenciação são regras matemáticas utilizadas para simplificar expressões com expoentes, as principais incluem:",
        propriedade1: "Multiplicar potências de mesma base somando expoentes", 
        propriedade2: "dividir subtraindo",
        proprieade3: "potência de potência multiplicando expoentes",
        propriedade4:"potência de produto/quociente, onde o expoente se aplica a todos os fatores."
    })
    })

const contasVestibularesRouter = require('./rotas/contasVestibulares.js')
app.use('/contasVestibulares', contasVestibularesRouter)

const contasBasicasRouter = require('./rotas/contasBasicas.js')
app.use('/contasBasicas', contasBasicasRouter)





app.listen(3000, () => {
    console.log("Rodando")
})

//apresentar propriedades da potência
//solucionar 10 exercicios basicos 
//buscar 5 exercicios de vestibulares anteriores





