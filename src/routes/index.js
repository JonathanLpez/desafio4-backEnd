const controllerProducts = require('../../products/controller.products.js')
const controllerCart = require('../../cart/controller.cart.js')

const router = (app)=>{ 
    app.use('/api/products', controllerProducts)
    app.use('/api/carts', controllerCart)
}

module.exports = router