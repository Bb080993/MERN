const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/allProducts', ProductController.allProducts)
    app.get('/api/oneProduct/:id', ProductController.oneProduct)
    app.post('/api/product', ProductController.createProduct); 
    app.patch('/api/oneProduct/:id', ProductController.updateOne) 
    app.delete('/api/oneProduct/:id', ProductController.deleteOne)

}


