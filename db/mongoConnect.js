const mongoose = require('mongoose'); //connect to mongoose module
require('dotenv').config()

main().catch(err => console.log(err)); //Error Message if not working the connect

async function main() { //connect Data Base from Mongo Atlas by user & password 
    await mongoose.connect(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@cluster0.ym3ax.mongodb.net/projectOfer`); //(feb22 == name DataBase)
    console.log(`Mongo Atlas connect...`) //print--> Mongo is Working
}