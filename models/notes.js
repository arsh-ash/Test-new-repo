const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requred:true
    },
    body:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  }
);
NotesSchema.index({title:"text"})

module.exports = mongoose.model("Notes", NotesSchema);
