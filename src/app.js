const express = require('express')
const app = express()


const path = '../data'
const fileName = 'productos.txt'

const ProductManager = require('./productManager.js')
const prodManager = new ProductManager(fileName, path)

port = 8080

app.get('/products', async (req, res) => {

    let limit = req.query.limit;

    try {
        const products = await prodManager.getProducts();

        if(limit>0){ 
            const newArray = products.slice(0,limit)
            res.status(200).json(newArray)
        } else{
            res.status(200).json(products)
        }
    
    } catch (error) {
        res.status(500).json({error: "Error"})
    }

})

app.get('/products/:id', async (req, res) => {

    const id = Number(req.params.id)

    try {
        const prodFilter = await prodManager.getProductById(id)
        res.status(200).json(prodFilter)
    } catch (error) {
        res.status(500).json({error: "error"})
    }

})

app.listen(port, () => {
    console.log(`Listen in port ${port}`)
})