const jwt=require("jsonwebtoken")

const cheakAuth=((req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1]
        const decoredToken = jwt.verify(token,"secret")
        req.userDate=decoredToken
        next()
    } catch (error) {
        return res.status(401).json({
            "message":"invaid or explird token",
            "error":error
        })
    }
})

module.exports={
    cheakAuth:cheakAuth
}