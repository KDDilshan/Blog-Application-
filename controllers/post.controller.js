const { error } = require('console');
const Validator=require("fastest-validator")
const models = require('../models');
const { where } = require('sequelize');

const saves = (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content, 
        imageUrl: req.body.imageUrl, 
        categoryId: req.body.categoryId,
        userId: req.userDate.userId
    };

    console.log(req.userDate)

    const schema={
        title:{type:"string",optional:false,max:"100"},
        content:{type:"string",Optional:false,max:"500"},
        categoryId:{type:"number",optional:false}
    }

    const v =new Validator()
    const validationResponse=v.validate(post, schema)

    if(validationResponse !== true){
        return res.status(400).json({
            message:"validation failed",
            error:validationResponse
        })
    }

    models.Category.findByPk(req.body.categoryId).then(result=>{
        if (result !== null) {
            models.Post.create(post)
        .then(result => {
            res.status(201).json({
                message: "Post created successfully",
                post: result
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Post not created",
                error: error
            });
        });
        }else{
            res.status(400).json({
                message:"Invalid categroy Id",
                error:error
            })
        }
    })

    
};

const show=((req,res)=>{
    const id=req.params.id

    models.Post.findByPk(id,{
        include:[models.Category,models.User]
    }).then(result=>{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message:"post not found"
            })
        }
        
    }).catch(error=>{
        res.status(500).json({
            message:"someyhis went wrong"
        })
    })
})

const allShow=((req,res)=>{
    models.Post.findAll().then((result) => {
        res.status(200).json(result)
    }).catch((err) => { 
        res.status(500).json({
            message:"nothing to found"
        })
    });
})

const update=((req,res)=>{
    const id=req.params.id

    const updatePost={
        title: req.body.title,
        content: req.body.content, 
        imageUrl: req.body.imageUrl, 
        categoryId: req.body.categoryId,
    }

    const userId= req.userDate.userId

    const schema={
        title:{type:"string",optional:false,max:"100"},
        content:{type:"string",Optional:false,max:"500"},
        categoryId:{type:"number",optional:false}
    }

    const v =new Validator()
    const validationResponse=v.validate(updatePost, schema)

    if(validationResponse !== true){
        return res.status(400).json({
            message:"validation failed",
            error:validationResponse
        })
    }

    models.Category.findByPk(req.body.categoryId).then(result=>{
        if (result !==null) {
            models.Post.update(updatePost,{where:{id:id,userId:userId}}).then(result=>{
                if(result){
                    res.status(200).json({
                        message:"post updated sucessfully",
                        post:updatePost
                    })
                }else{
                    res.status(404).json({
                        message:"post not found"
                    })
                } 
            }).catch(error=>{
                res.status(500).json({
                    message:"somrthisng went wrong"
                })
            })
        }else{
            res.status(500).json({
                message:"Invalid catgegory ID",
                error:error
            })
        }
        
    })
})

const destroy=((req,res)=>{
    const id=req.params.id
    const userId= req.userDate.userId

    models.Post.destroy({where:{id:id,userId:userId}}).then(result=>{
        res.status(500).json({
            message:"post deleted sucessfully",
            post:result
        })
    }).catch(error=>{
        res.status(500).json({
            message:"some error has occred deleting id"
        })
    })
})

module.exports = {
    saves:saves,
    show:show,
    allShow:allShow,
    update:update,
    destroy:destroy
};
