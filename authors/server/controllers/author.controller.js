const Author=require('../models/author.model')

module.exports.findAllAuthors=(req, res)=>{
    Author.find()
        .then(allAuthors=>{
            res.json({authors:allAuthors})
        })
        .catch(err=>{
            res.json({message:"Error with find all authors method", error:err})
        })
}

module.exports.findOneAuthor=(req, res)=>{
    Author.findById({ _id: req.params.id })
        .then(oneAuthor=>{
            res.json({author:oneAuthor})
        })
        .catch(err=>{
            res.json({message: "Error with find one method", error:err})
        })
}

module.exports.createAuthor=(req, res)=>{
    Author.create(req.body)
        .then(newAuthor=>{
            res.json({newlyCreatedAuthor: newAuthor})
        })
        .catch(err => res.status(400).json({message:"something went wrong in create method", error:err}))
}

module.exports.updateAuthor=(req, res)=>{
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor=>{
            res.json({author: updatedAuthor})
        })
        .catch(err => res.status(400).json({message:"something went wrong in update method", error:err}))
}
 module.exports.deleteAuthor=(req, res)=>{
    Author.findByIdAndDelete({_id: req.params.id})
        .then(deletedAuthor=>{
            res.json(deletedAuthor)
        })
        .catch(err=>{
            res.json({message:"Error in delete method", error:err})
        })
 }