const {Post} = require('../../models/Post');

const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({user: req.user._id}).populate('user').sort({_id: -1});
        if(!allPosts) return res.status(500).json({success: false, msg: 'No items found'});

        return res.status(200).json({success: true, msg: 'All posts', allPosts});
        console.log(allPosts);
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message})
    }
}
module.exports = getAllPosts;