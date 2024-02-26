const models=require("../models")

const test=(async(req,res)=>{

    // one to one 
    // const user=await models.User.findByPk(1,{
    //     include:[models.Address]
    // })
    // const address=await models.Address.findByPk(1,{
    //     include:[models.User]
    // })

    // one to many
    // const user=await models.User.findByPk(1,{
    //     include:[models.Post]
    // })

    // const post=await models.Post.findByPk(1,{
    //     include:[models.User]
    // })

    // many to many
    // const post=await models.Post.findByPk(1,{
    //     include:[models.Category]
    // })

    // const posts=await models.Category.findByPk(11,{
    //     include:[models.Post]
    // })
    // res.status(200).json({
    //     data:posts
    // })
})

module.exports={
    test:test
}
