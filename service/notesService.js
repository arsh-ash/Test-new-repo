const Notes=require("../models/notes")
const ErrorResponse = require("../handlers/AppError");
const responseCode = require("../handlers/responseCodes");


module.exports.craeteNotes=async (data,next,callback)=>{
 try {
    let createdNote=await Notes.create(data)
    if(!createdNote){
     return next(new ErrorResponse(responseCode.CONFLICT, "Notes Not created",responseCode.CONFLICT.code));

    }
    callback(null,createdNote)
 } catch (error) {

    callback(error)
 }
}


module.exports.getAllNotes=async (next,callback)=>{
    try {
       let allNotes=await Notes.find({})
        
       if(!allNotes){
        return next(new ErrorResponse(responseCode.CONFLICT, "Notes Not found",responseCode.CONFLICT.code));
   
       }
       callback(null,allNotes)
    } catch (error) {
       callback(error)
    }
   }


   module.exports.getNoteById=async (noteId,next,callback)=>{
    try {
       let note=await Notes.findById(noteId)
        
       if(!note){
        return next(new ErrorResponse(responseCode.CONFLICT, "Note Not found",responseCode.CONFLICT.code));
   
       }
       callback(null,note)
    } catch (error) {
       callback(error)
    }
   }

   module.exports.queryNotesByTitleSubString=async (subString,next,callback)=>{
    try {
      console.log(subString)
        const regex = new RegExp(`^${subString}`,"i");
        const notes= await Notes.find(
         
         { $text: { $search: subString } },
         { score: { $meta: "textScore" } }
           
          )
       if(!notes){
        return next(new ErrorResponse(responseCode.CONFLICT, "Notes Not found with this substring",responseCode.CONFLICT.code));
   
       }
       callback(null,notes)
    } catch (error) {
        console.log(error)
       callback(error)
    }
   }

   module.exports.updateNote=async (noteId,data,next,callback)=>{
    try {
        const updatedNote= await Notes.findByIdAndUpdate(
            noteId,
            data,
            {
                new:true
            }
        )
       if(!updatedNote){
        return next(new ErrorResponse(responseCode.CONFLICT, "Note not updated",responseCode.CONFLICT.code));
   
       }
       callback(null,updatedNote)
    } catch (error) {
        console.log(error)
       callback(error)
    }
   }