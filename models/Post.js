const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let postSchema = new Schema({
    input: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    // input: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'user'
    // },
    // likes: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'user'
    // }],
    // comments: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'comment'
    // }],

    // shares: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'user'
    // }],

    // mediaType: String,

    // media: String,

},{ timestamps: true });

module.exports = {
    Post: model('post', postSchema)
}