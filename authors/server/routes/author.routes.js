const AuthorController=require('../controllers/author.controller')

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.post('/api/createAuthor', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.patch('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}
