const Product = require('../models/product.model');    

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}         
module.exports.createProduct = (request, response) => {
    
    Product.create(request.body) 
        .then(product => response.json(product))
        .catch(err => response.json({ message: 'Something went wrong with create', error: err}));
}
module.exports.allProducts= (request, response) =>{
    Product.find()
        .then(products => response.json(products))
        .catch(err => response.json({ message: 'Something went wrong with find all', error: err}))
}

module.exports.oneProduct= (req, res)=>{
    Product.findById({ _id: req.params.id })
        .then(oneProduct=>{
            res.json(oneProduct)
        })
        .catch(err=>{
            console.log({message: "Issue in find one method", error:err})
        })
}
module.exports.updateOne=(req, res)=>{
    Product.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true, runValidators: true })
        .then(updatedProduct=>{
            res.json({product:updatedProduct})
        })
        .catch(err=>{
            res.json({message: "Issue in update one method", error:err})
        })
}
module.exports.deleteOne=(req, res)=>{
    Product.findByIdAndDelete({ _id: req.params.id })
    .then(result=>{
        res.json({result:result})
    })
    .catch(err=>{
        res.json({message:"Issue in delete one method", error:err})
    })
}



