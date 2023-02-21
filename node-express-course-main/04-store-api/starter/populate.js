require('dotenv').config()

const connectDB = require ('./db/connect')
const Product = require ( './models/product')

const jsoonProducts = require( './products.json')


const start = async ( )=>{
     try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsoonProducts)
        process.exit(0)
     }
     catch(err){
        console.log ( error )
        process.exit(1)
     }
}

start ( )