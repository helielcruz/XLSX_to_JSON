const express = require("express");
const XLSX = require("xlsx");
const User = require("./models/User");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('views', __dirname + '/src');
app.engine('html', require('ejs').renderFile);

app.get("/", async(req,res) => {

    res.render("default.html");
});

app.post("/estados", async(req,res) => {

    /**
     * recebe os dados do banco
     */

    var ES, MG, PR = 0, RJ,
    RS, SC, SP, SUL, SUDESTE;


    let estados = await User.findAll({
        attributes: ['UF']
    });
    json(estados, null, 2);

    function counter(estados) {
        let counts = {};
        let index = 0;
    
    estados.forEach((count) => {
        if(count == "PR");
        index++;
    
    });
    
    res.send(index);
    }

/*     
         if (element === 'PR') {
            PR++;
            SUL++;
        }
        if (element === 'SANTA CATARINA') {
            SC++;
            ALO_SUL++;
        }
        if (element === 'RIO GRANDE DO SUL') {
            RS++;
            ALO_SUL++;
        }
        if (element === 'SÃO PAULO') {
            SP++;
            ALO_SUDESTE++;
        }
        if (element === 'RIO DE JANEIRO') {
            RJ++;
            ALO_SUDESTE++;
        }
        if (element === 'MINAS GERAIS') {
            MG++;
            ALO_SUDESTE++;
        }
        if (element === 'ESPÍRITO SANTO') {
            ES++;
            ALO_SUDESTE++;
        }*/
    //
    
});

/*
app.post("/PRODUTO", async(req,res) => {

    /**
     * recebe os dados do banco
     
    let data_query = await User.findAll({
        attributes: ['ESTADO', 'PRODUTO']
    });

    return JSON.stringify(data_query, null, 2);
});*/
app.get("/import/:offset", async (req, res) => {

    var limit = 1200;
    var offset = req.params.offset ?? 0;

    let excel = XLSX.readFile("./tools/base.xlsx");
    let plan = excel.SheetNames;
    let data_e = XLSX.utils.sheet_to_json(excel.Sheets[plan[0]]);

    /**
     * XLSX
     */
    let objeto_xlsx = Object.values(data_e).slice(offset,(limit+parseInt(offset)));

    /**
     * import data base
     * create register
     */
    objeto_xlsx.forEach(element => {
        User.create(element)
        .then(() => {
            console.log("Success: "+element);
        })
        .catch( ()=> {
            console.log("Error: "+element);
        })        
    });
    /** */

    /**
     * verify of register
     */
    if(offset < 5034684){
        setTimeout(()=>{
            res.redirect("/import/"+(parseInt(offset)+limit));
        },500);
    }else{
        res.redirect("/");
    }
    /** */
});

app.listen(9002, () => {
    console.log("Service is UP in: http://localhost:9001/");
});