const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        UseUnifiedTopology: true ,
    }).then(con => {
        console.log(`MongoDB DataBase Connected with Host: ${con.connection.host}`)
    })
} ;

module.exports = connectDatabase
