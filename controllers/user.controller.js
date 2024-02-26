const models=require("../models")
const bcryptjs=require("bcryptjs")
const Validator=require("fastest-validator")
const { error } = require("console")
const jwt=require("jsonwebtoken")

const signUp=((req,res)=>{

    models.User.findOne({where:{email:req.body.email}}).then(result=>{
        if (result) {
            res.status(409).json({
                message:"Email already exsits"
            })
        } else {
            bcryptjs.genSalt(10,((err,salt)=>{
                bcryptjs.hash(req.body.password,salt,((err,hash)=>{
                    const user={
                        name:req.body.name,
                        email:req.body.email,
                        password:hash
                    }
                    models.User.create(user).then((result) => {
                        res.status(200).json({
                            message:"user created suseefully"
                        })
                    }).catch((err) => {
                        res.status(500).json({
                            message:"somthinf wronf"
                        })
                    });
                }))
            }))
        }
    }).catch(error=>{
        res.status(500).json({
            message:"somthinf wronf"
        })
    })
})

const login=((req,res)=>{
    models.User.findOne({where:{email:req.body.email}}).then(user=>{
        if(user===null){
            res.status(401).json({
                message:"invaild credentials"
            })
        }else{
            bcryptjs.compare(req.body.password,user.password,((error,result)=>{
                if (result) {
                    const token =jwt.sign({
                        email:user.email,
                        userId:user.id
                    },"secret",((error,token)=>{
                        res.status(200).json({
                            message:"Authentication sucessfull",
                            token:token
                        })
                    }))
                    
                } else {
                    res.status(401).json({
                        message:"invaild credentials"
                    })
                }
            }))
        }
    }).catch(error=>{
        res.status(500).json({
            message:"somthinf wronf"
        })
    })
})

module.exports={
    signUp:signUp,
    login:login
}