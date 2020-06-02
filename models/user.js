const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type: String,
    trim:true,
    unique:true,
    required:"Username is Required"
  },
  password:{
    type: String,
    trim: true,
    required:"Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer"]
  },
  email:{
    type: String,
    unique:true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"] 
  },
  firstName: {
    type: String,
    trim: true,
    match:[/^[a-zA-Z0-9]+$/, 'is invalid'],
    required: "First Name is required",
  },
  lastName: {
    type: String,
    trim: true,
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    required: "Last Name is required"
  },
    tagLine: {
      type: String
    },
    status: {
      type: String
    }
});


var User = mongoose.model('User' , userSchema);
module.exports = User;
