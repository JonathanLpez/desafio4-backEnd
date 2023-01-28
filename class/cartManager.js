const fs = require('fs')

class CartManager {

    constructor(path, fileName){ 
        this.fileName = fileName
        this.path= path
        this.cart = []
        this.id = this.cart.length

        try {
            this.cart = JSON.parse(fs.readFileSync(this.path+'/'+this.fileName))
            console.log("Archivo cart existente")
        } catch (error) {
            fs.writeFileSync(this.path + '/' + this.fileName, JSON.stringify([]));
            console.log('Datos creados')
        }
    }

}

module.exports = CartManager