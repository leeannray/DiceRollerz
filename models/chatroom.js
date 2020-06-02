const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileImage = "https://static01.nyt.com/images/2018/05/15/arts/01hal-voice1/merlin_135847308_098289a6-90ee-461b-88e2-20920469f96a-superJumbo.jpg?quality=90&auto=webp"

const chatroomSchema = new Schema({
  name: { type: String, required: true },
  members:[
    {
      user:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true 
      },
      role: {type:String},
      image: {type: String,
              default: profileImage}       
      }
      
      
  ],
  gameMode: {type: Boolean, default: false}
});

const Chatroom = mongoose.model("Chatroom", chatroomSchema);

module.exports = Chatroom;
