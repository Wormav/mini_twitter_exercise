const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://Wormav:qwe@cluster0.tl7kw.mongodb.net/twitter?retryWrites=true&w=majority'

mongoose
  .connect(
    mongoURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('connexion db ok !'))
  .catch((err) => console.log(err));

module.exports = mongoURL ;