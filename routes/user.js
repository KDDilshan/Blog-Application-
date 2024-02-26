const userContollers=require("../controllers/user.controller.js")
const express=require("express")

const routes=express.Router()

routes.post("/",userContollers.signUp)

routes.post("/login",userContollers.login)

module.exports = routes;