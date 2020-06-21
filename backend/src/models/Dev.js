import mongoose from 'mongoose';

const DevSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    login:{
        type: String,
        required: true,
    },
    bio: String,
    avatar_url:{
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

export default mongoose.model( 'Dev', DevSchema);