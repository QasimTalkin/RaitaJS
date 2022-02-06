const mongoose = require('mongoose');

const Schema = mongoose.Schema; // object og mongoose schema

//Schema structure
const contactUsSchema = new Schema({
  name: {type:String, required:true},
  subject: {type:String, required:true},
  body: {type:String, required:true},
}, {timestamps:true})

   
//Model
const ContactUs = mongoose.model('ContactUs', contactUsSchema); 

// export the model to
module.exports = ContactUs