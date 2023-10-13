const express = require("express");
const mongoose = require("mongoose");
const passport = require("./middleware/passport");
const app = express();


mongoose.connect("mongodb://localhost/organization-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize()); 
app.use("/organizations", require("./routes/organizations"));
app.use("/users", require("./routes/user"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
