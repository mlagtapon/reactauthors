const { Author } = require('../models/author.model');

module.exports = {
    index: (req, res) => {
        Author.find().sort({name: 1})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    show: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    update: (req,res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {useFindAndModify:true, runValidators:true})
            .then(data => {
                res.json({results:data})
            })
            .catch(err => res.json(err.errors))
    },
    delete: (req,res) => {
        Author.deleteOne({_id: req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    }
}