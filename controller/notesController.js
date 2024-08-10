const Notes=require("../models/notes")
const ErrorResponse = require("../handlers/AppError");
const responseCode = require("../handlers/responseCodes");


const notesService=require("../service/notesService")

module.exports.createNotes=async(req,res,next)=>{
    try {
      
       await notesService.craeteNotes(req.body,next,(err,result)=>{
            if(err){
                 return next(new ErrorResponse(err.name, err.message, err.statusCode));
            }
            return res.status(200).json({
                message:"Notes created successfully",
                data:result
            })
        })
        
    } catch (error) {
      return next(new ErrorResponse(error.name));

    }
     
}


module.exports.getAllNotes=async(req,res,next)=>{
    try {
      
       await notesService.getAllNotes(next,(err,result)=>{
            if(err){
                 return next(new ErrorResponse(err.name, err.message, err.statusCode));
            }
            return res.status(200).json({
                message:"Notes fetched successfully",
                data:result
            })
        })
        
    } catch (error) {
      return next(new ErrorResponse(error.name));

    }
     
}

module.exports.getNoteById=async(req,res,next)=>{
    try {
       
       await notesService.getNoteById(req.params.noteId,next,(err,result)=>{
            if(err){
                 return next(new ErrorResponse(err.name, err.message, err.statusCode));
            }
            return res.status(200).json({
                message:"individual Note fetched successfully",
                data:result
            })
        })
        
    } catch (error) {
      return next(new ErrorResponse(error.name));

    }
     
}

module.exports.queryNotesByTitleSubString=async(req,res,next)=>{
    try {
        let subString=req.query.title
       await notesService.queryNotesByTitleSubString(subString,next,(err,result)=>{
            if(err){
                 return next(new ErrorResponse(err.name, err.message, err.statusCode));
            }
            return res.status(200).json({
                message:"notes fetched by substring successfully",
                data:result
            })
        })
        
    } catch (error) {
      return next(new ErrorResponse(error.name));

    }
     
}

module.exports.updateNote=async(req,res,next)=>{
    try {
       await notesService.updateNote(req.params.noteId,req.body,next,(err,result)=>{
            if(err){
                 return next(new ErrorResponse(err.name, err.message, err.statusCode));
            }
            return res.status(200).json({
                message:"note updated successfully",
                data:result
            })
        })
        
    } catch (error) {
      return next(new ErrorResponse(error.name));

    }
     
}