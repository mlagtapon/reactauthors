const mongoose = require('mongoose'),
    uri = 'author_db';

mongoose.connect(`mongodb://localhost/${uri}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("In main frame . . ."))
    .catch(err => console.log("Error Error Error", err))