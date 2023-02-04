const {
    Router
} = require('express')
const router = Router();

const path = '../data'
const fileName = "cart.json"

const CartManager = require('../class/cartManager.js')
const cartManager = new CartManager(path, fileName)

// Agregar carrito nuevo
router.post('/', async (req, res) => {
    const cart = await cartManager.newCart()
    res.status(201).json(cart)
})

router.get('/:cid', async (req, res) => {
    const cid = req.params.cid

    try {
        const cart = await cartManager.getCartID(cid)
        res.status(200).json(cart)

    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
})

router.post('/:cid/product/:pid', async (req, res)=>{ 
    const {cid, pid} = req.params

    try {
        const cart = await cartManager.postProductInCart(cid,pid)
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({message: "error desde route "})
    }
    
})

module.exports = router