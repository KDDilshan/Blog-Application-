const upload=((req,res)=>{
    if (req.file.filename) {
        res.status(201).json({
            message:"image upload suessfully",
            url:req.file.filename
        })
    }else{
        res.status(500).json({
            message:"somthing went wrong"
        })
    }
})

module.exports={
    upload:upload
}