const express = require("express")
const router = express()

router.use("/api/users", require("./UserRoutes"))

router.get("/", (req, res) => {
    res.send("API Working!")
})

// router.post("/addcherlau", (req, res) =>{
//     const name = req.body.name
//     const profissao = req.body.profissao

//     res.status(201).json({message: `${name} que trabalha como ${profissao} foi criado!`})
// })

module.exports = router