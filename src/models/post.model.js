import { model, Schema } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: "Anonymous"
    },
    like: {
        type: Number,
        default: 0
    }
    //auto create 2 fields createdAt and updatedAte
}, { timestamps: true });

const PostModel = model('Post', PostSchema);

module.exports = PostModel;