import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';
//trycatch to connect database
(async ()=>{
    try {
        const mongooseOptions: ConnectionOptions = {
            useUnifiedTopology:true,
             useNewUrlParser:true,
           
         }
         const db= await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
         console.log("DATABASE CONNECTED TO:", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})()