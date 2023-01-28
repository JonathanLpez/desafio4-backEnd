const {Router}= require('express')
const router = Router();

const path = '../data'
const fileName = "cart.json"

const CartManager = require('../class/cartManager.js')
const cartManager = new CartManager(path, fileName)


router.get('/', (req,res)=>{ 
    res.json({message: " router cart "})
})


module.exports = router