import mongoose from "mongoose";

const messageSchama = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recevierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

const Message = mongoose.model("Message",messageSchama);
export default Message;