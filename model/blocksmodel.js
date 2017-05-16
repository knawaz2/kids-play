const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


var valuesSchema = new Schema({
  objname:{
    type:String,
    required: true,
  },
  objImage: {
    type: String,
    required: true
  },
  objstatus:{
    type: String
  },
  objspeak:{
    type: String
  }
});

const blockSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Please provide block key'],
    unique: true
  },
  associatedTo:[valuesSchema]
});


const Block = module.exports = mongoose.model('Block', blockSchema);
