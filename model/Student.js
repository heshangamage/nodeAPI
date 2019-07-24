const mongoose = require("mongoose");

//configuring db
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"));
mongoose.connection.on("error", err =>
  console.log(`Connection error ${err.message}`)
);

var studentSchema = new mongoose.Schema({
  stuName: { type: String, minlength: 2, maxlength: 10 },
  stuId: { type: String, minlength: 2, maxlength: 10 },

  stream: { type: String, minlength: 2, maxlength: 10 }
});

module.exports = mongoose.model("Students", studentSchema);
