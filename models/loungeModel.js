import mongoose from "mongoose";
const { Schema } = mongoose;

const SmokleySLoungeSchema = new mongoose.Schema({
    discordID: {
        type: String,
        required: true,
        unique: true
    },
    wallet: {
        type: String,
        required: true,
        unique: true
    },
    tokenID: {
        type: Number,
        required: true,
        unique: true
    }
}, { timestamps: true } );

export default mongoose.model('SmokleySLounge', SmokleySLoungeSchema)