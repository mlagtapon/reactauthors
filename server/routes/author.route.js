const AuthorController = require('../controllers/author.controller');
const { Author } = require('../models/author.model');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.index);
    app.get('/api/authors/:id', AuthorController.show);
    app.post('/api/authors/create', AuthorController.create);
    app.put('/api/authors/update/:id', AuthorController.update);
    app.delete('/api/authors/delete/:id', AuthorController.delete)
}