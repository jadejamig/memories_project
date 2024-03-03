import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// First parameter is the singular form of the collection
// mongoose then changes this to plural form (and lowercased) and creates that collection in your cluster
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;