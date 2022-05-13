const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxlength: [140, "Trop long"],
    minlength: [1, "Trop court"],
    required: [true, "Champ requis"],
  },
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
