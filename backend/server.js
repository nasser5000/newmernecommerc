const path = require('path');
const app = require('./app');
const dotenv = require('dotenv');

//Setting up configuration file path
dotenv.config({path: './backend/config/config.env'})
app.listen(process.env.PORT , ()=>{
    console.log(`Server Started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
