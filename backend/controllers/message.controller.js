import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recevierId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recevierId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recevierId],
      });
    }
    const newMessage = await Message({
      senderId,
      recevierId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SORCKET IO WILL CREATE


    //correct but deferrent time save
    // await newMessage.save();1
    // await conversation.save();2

    //same time save
    await Promise.all([newMessage.save(), conversation.save()]);

    const receiverSocketId = getReceiverSocketId(recevierId);

    if (receiverSocketId) {
      //io.to(receiverSocketId).emit("newMessage", newMessage); specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(200).json({
      newMessage,
    });
  } catch (error) {
    console.log("Error in SEND MESSAGE controller", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");//not reference but actual messsages
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in GET MESSAGE controller", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
