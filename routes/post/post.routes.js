const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');
const verify = require('../../middleware/authjwt');


const createPost = require('../../controllers/post/createPost');
const getAll = require('../../controllers/post/getAll');
const deletePost = require('../../controllers/post/deletePost');




router.route('/')
    .post(verify, createPost)
    .get(verify, getAll);

router.delete("/:id", verify, deletePost);




module.exports = router;