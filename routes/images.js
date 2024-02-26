const express=require("express")
const imageController=require("../controllers/image.controller.js")
const imageUploader=require("../helpers/images-uploader.js")
const cheakAuth=require("../middleware/cheak-auth.js")

const routers=express.Router()


routers.post('/uploads',cheakAuth.cheakAuth,imageUploader.upload.single('image'),imageController.upload)

module.exports=routers