const express = require('express');
const postController = require('../controllers/post.controller.js');
const cheakAuthMiddleware=require("../middleware/cheak-auth.js")

const router = express.Router();

// Define routes
router.post("/",cheakAuthMiddleware.cheakAuth,postController.saves); // Assuming you have a 'save' method in your postController

router.get("/:id",postController.show)

router.get("/",postController.allShow)

router.put("/:id",cheakAuthMiddleware.cheakAuth,postController.update)

router.delete("/:id",cheakAuthMiddleware.cheakAuth,postController.destroy)


module.exports = router;
