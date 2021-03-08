const mongoose = require('mongoose');

//mongodb+srv://<usuario>:<clave>@cluster0.lghyo.mongodb.net/test

var mongodb = process.env.MONGO_URI;

const dbConnection = async() => {
    //Código de conexión a la base de datos
    try {
        mongoose.connect(mongodb, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Conectado a MongoDB satisfactoriamente!!');
    
    }
    catch(error){
        console.log('Ocorrio un error al conectarse al cluster de Mongo Atlas: ' + error);
    }
    
}

module.exports = dbConnection



