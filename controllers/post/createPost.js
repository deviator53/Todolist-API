const {Post} = require('../../models/Post');
const cloudinary = require('cloudinary').v2;
// const cloudinarySetup = require('../../config/cloudinarySetup');


const createNewPost = async (req, res) => {
    let {input} = req.body;
    console.log(req.body);

    if(!input) return res.status(400).json({success: false, msg: 'Please type an item'});
    // if(req.file.mimetype !== 'image/*' || req.file.mimetype !== 'video/*') return res.status(400).json({msg:'Only Images are allowed'});

   
    const newPost = new Post({
        user: req.user._id,
        input
    });
    console.log(newPost);

    if(!newPost) return res.status(500).json({success: false, msg: 'An error has occured'})

    await newPost.save();

    return res.status(201).json({success: true, msg: 'Item added', newPost});

}

module.exports= createNewPost;