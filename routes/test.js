const express=require("express")
const testControllers=require("../controllers/test.controller.js")

const routeses=express.Router()

routeses.get("/",testControllers.test)

module.exports=routeses