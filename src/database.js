const mongoose  = require('mongoose');
const URI = 'mongodb://localhost/crud';
mongoose.connect(URI)
    .then(db => console.log('the database is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;





