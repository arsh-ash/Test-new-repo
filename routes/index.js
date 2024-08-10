const express=require("express");
const Router=express.Router()
const notesRouters=require("./notesRouter")

Router.use("/notes",notesRouters)

module.exports=Router