const controllerProducts = require('../../products/controller.products.js')
const controllerCart = require('../../cart/controller.cart.js')

const router = (app)=>{ 
    app.use('/api/products', controllerProducts)
    app.use('/api/cart', controllerCart)
}

module.exports = router