const Product = require('../models/product')

const getAllProductsStatic = async ( req,res)=>{ 
    const prodcuts = await Product.find({featured: true})
    res.status(200).json({prodcuts, nbHits: prodcuts.length})
}

const getAllProducts = async ( req,res)=>{ 
    const { featured,company,name } = req.query
    const queryObject = {}
    if (featured){ 
        queryObject.featured = featured === 'true' ? true: false 
    }
    if(company){
        queryObject.company = company
    }
    if(name){ 
        queryObject.name = { $regex: name, $options:'i' }  // if at least pattern at name matches then will give all values
    }
    console.log(queryObject)
    const products = await Product.find(queryObject)
    res.status(200).json({products , nbHits: products.length })
}

module.exports = { 
    getAllProducts,
    getAllProductsStatic
}