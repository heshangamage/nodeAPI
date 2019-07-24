const Student = require("../model/Student");

exports.getAllStudents = (req, res) => {
  Student.find({}, (err, data) => {
    if (err) throw err;
    res.render("index", { students: data });
  });
};

exports.getAddStudent = (req, res) => {
  res.render("addStudent");
};

exports.getContact = (req, res) => {
  res.render("contactUs");
};

exports.addStudent = (req, res) => {
  var newStu = Student(req.body).save(function(err, data) {
    if (err) throw err;
    res.render("success", { data: req.body });
  });
};

exports.getStudent = (req, res) => {
  // var data = { stuName: "heshan", stuId: "001", stream: "maths" };
  Student.find({ stuId: req.params.stuId }, function(err, data) {
    if (err) throw err;
    res.render("student", { student: data });
  });
};

exports.updateStudent = (req, res) => {
  console.log("ID:" + req.params._id);
  console.log(req.body);
  Student.findByIdAndUpdate(req.params._id, {
    $set: req.body
  }).then(function() {
    Student.findOne({ _id: req.params._id }).then(function(student) {
      res.render("success", { data: student });
    });
    console.log(`successfully upadated with id ${req.params._id}`);
  });
};

exports.deleteStudent = (req, res) => {
  console.log(req.params.stuId);
  Student.find({ stuId: req.params.stuId }).deleteOne(function(err, data) {
    if (err) throw err;
    console.log(`successfully deleted with id ${req.params.stuId}`);
  });
  res.redirect("/");
};
