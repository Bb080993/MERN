const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: { 
      type: String,
      required: [true, "Joke setup is required"],
      minlength: [1, "Joke setup must be at least 1 character long"]
    },
    punchline: { 
      type: String,
      required: [true, "Punchline is required"],
      minlength: [1, "Joke punchline is required and must be at least 1 character long"]
    },
    
  }, 
{ timestamps: true }
);
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
