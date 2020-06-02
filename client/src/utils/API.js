import axios from "axios";
// set up socket info 
import openSocket from 'socket.io-client';
import { CommunicationStayPrimaryLandscape } from "material-ui/svg-icons";
const socket = openSocket.connect();//openSocket('http://localhost:3001');

export default {
  getChatrooms: function(query) {
    return axios.get("/api/chat");
  },

  getChatroom: function(id){
    return axios.get("/api/chat/"+id);
  },

  getUser: function(id){
    return axios.get("/api/user/"+id);
  },

  getUsers: function(){
    return axios.get("/api/user");
  },

  updateUser: async function(user){
    const data = await axios.put("/api/user/"+user._id, user);
    this.socketMsg(user);
    return data;
  },
  sendPost: async function(post){
    const data = await axios.post("/api/post", post);
    this.socketMsg(post);
    return data;
  },

  editPost: async function(post){
    console.log( "updating "+post.id);
    const data = await axios.put("/api/post/"+post.id, {body: post.body});
    this.socketMsg(data.data);
    return data;
  },

  deletePost: async function(id){
    const data = await axios.put("/api/post/"+id, {deleted:true});
    this.socketMsg({...data.data});
    return data;
  },


  createNewChatroom: async function(chatOptions){
    const data = await axios.post("/api/chat", chatOptions);
    this.socketRoom(data.data);
    return data;
  },

  addChatroomMember: async function(id, post) {
    const { user, role } = post
    const data = await axios.put("/api/chat/"+id, { "$push": {"members": { "user": user, "role": role }}});
    this.socketRoom(data.data);
    return data;
  },


  // Socket Send
  socketMsg(msg){
    socket.emit('chatMessage', (msg));
  },
  socketRoom(msg){
    socket.emit("chatroomEdit", msg);
  },

  socketListen(cb){
    console.log("Now listening for new messages");
    socket.on("newMessage", (msg) => {cb(msg)});
  },

  socketRoomListen (cb){
    console.log("Now listening for new chatrooms");
    socket.on("chatroomChanged", (msg) => {cb(msg)});
  },


  //Sign Up Users
  signUpNewUser: async function(signInData){
    const data = await axios.post("/api/user/signup", signInData);
    return data;
  },
};
