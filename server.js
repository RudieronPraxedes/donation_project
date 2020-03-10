// configurando o servidor
const express = require("express")
const server = express()


//configurar servidor para aprensentar arquivos estaticos
server.use(express.static('public'))

//habilitar body do formulario
server.use(express.urlencoded ({ extended:true}))

//configurando o template engine
const nunjucks = require ("nunjucks")
nunjucks.configure("./", {
    express:server,
    noCache: true,
})



//configurar a aprensentação da pagina
server.get("/", function(req, res){
        return res.render("index.html",{donors})
})

//coloco valores dentro do array
server.post("/",function (req, res){
    const name  = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
})


//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){
    console.log("iniciei o servidor.")

})

// lista de doadores: Vetores ou Array
const donors = [
    {name: "Rudieron Praxedes",
     blood: "AB+"
    },
    {name: "Roseli Aparecida",
     blood: "O+"
    },
    {name: "Mariana Moreira",
     blood: "A-"
    },
    {name: "Caio Ladeira",
     blood: "A+"
    }
]


