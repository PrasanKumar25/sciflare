
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, 
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
  
});

module.exports = mongoose.model("User", userSchema);

