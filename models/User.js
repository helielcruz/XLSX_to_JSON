const Sequelize = require('sequelize');
const db = require('./config/db');

const User = db.define('cadastros', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    DATA:{
        type: Sequelize.STRING
      }, 
    HORA: {
        type: Sequelize.INTEGER
    },
    DIA:{
        type: Sequelize.INTEGER
    },	
    MES:{
        type: Sequelize.INTEGER
    }, 
    UF: {
        type: Sequelize.STRING
    },	
    ESTADO: {
        type: Sequelize.STRING,
    }, 
    ALO: {        
        type: Sequelize.INTEGER,
    },
    CPC:  {        
        type: Sequelize.INTEGER,
    }, 
    CPCA:  {        
        type: Sequelize.INTEGER,
    }, 
    PP:  {        
        type: Sequelize.INTEGER,
    }, 
    CLIENTE_NAO_ESTA: {        
        type: Sequelize.INTEGER,
    }, 
    CLIENTE_NAO_VALIDOU:  {        
        type: Sequelize.INTEGER,
    }, 
    DESCONHECE:  {        
        type: Sequelize.INTEGER,
    }, 
    DESCONHECE_DIVIDA:  {        
        type: Sequelize.INTEGER,
    }, 
    FALECIDO:  {        
        type: Sequelize.INTEGER,
    }, 
    FONE_MUDO:  {        
        type: Sequelize.INTEGER,
    }, 
    LIG_PERDIDA:{        
            type: Sequelize.INTEGER,
        }, 
    PREVENTIVO:  {        
        type: Sequelize.INTEGER,
    }, 
    RECADO:  {        
        type: Sequelize.INTEGER,
    }, 
    ALEGA:  {        
        type: Sequelize.INTEGER,
    }, 
    RETORNO_AGENDADO:  {        
        type: Sequelize.INTEGER,
    }, 
    DADOS_INVALIDOS:  {        
        type: Sequelize.INTEGER,
    }, 
    SEM_INTERESSE:  {        
        type: Sequelize.INTEGER,
    }, 
    NAO_TABULADA: {        
        type: Sequelize.INTEGER,
    }, 
    RETORNO_INDIRETO:  {        
        type: Sequelize.INTEGER,
    },
    FRAUDE:  {        
        type: Sequelize.INTEGER,
    },
    OCUPADO:  {        
        type: Sequelize.INTEGER,
    },
    RECEPT:  {        
        type: Sequelize.INTEGER,
    }, 
    PROCESSO_JURIDICO:  {        
        type: Sequelize.INTEGER,
    },
    CONTESTACAO:  {        
        type: Sequelize.INTEGER,
    },
    VALOR: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },	
    TIPO: {
        type: Sequelize.STRING
    }, 
    PRODUTO: {type: Sequelize.STRING
    }
});

//Create the table if it doesn't exist.
User.sync();

// Check if there is any difference in the table and change
//User.sync({alter: true});

module.exports = User;