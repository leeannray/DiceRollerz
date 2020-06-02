const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Rollerz");

const userSeed = [
  {
    firstName: "Brian",
    lastName: "Fairbanks",
    username: "Akuma",
    email: "brian.k.fairbanks@gmail.com"
  },
  {
    firstName: "Surge",
    lastName: "Bracamontes",
    username: "Warsurge",
    email:  "surgebrock15@gmail.com"
  },
  {
    firstName: "Jonathan",
    lastName: "Andrews",
    username: "ionathas78",
    email: "ionathas78@hotmail.com"
  },
  {
    firstName: "Jason",
    lastName: "Strouphauer",
    username: "jdstroup10",
    email:  "jdstroup@gmail.com"
  },
  {
    firstName: "LeeAnn",
    lastName: "Norman",
    username: "DnD_Newbie",
    email: "no_email@email.com" 
  }
]


function seedUsers(){
  return new Promise((resolve, reject)=> {
    db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      resolve("Finished!");
    })
    .catch(err => {
      console.error(err);
      reject ("Error");
    })
  })
}

function seedChatrooms(user){
  const chatroomSeed = [
    {
      name:"Hello World",
      members:[
        {
          userID:user._id,
          role: "DM"
        }
      ],
      gameMode: false,
    },
    {
      name:"New Room 2",
      members:[
        {
          userID:user._id,
          role: "Roller"
        }
      ],
      gameMode: false,
    }
  ]

   // ---  Seed Chatrooms ------------------
  return new Promise((resolve, reject)=> {
    db.Chatroom
    .remove({})
    .then(() => db.Chatroom.collection.insertMany(chatroomSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      resolve("Finished!");
    })
    .catch(err => {
      console.error(err);
      reject ("Error");
    })
  })
}


async function seedChats(){
  // ---  Seed Users ------------------
  await seedUsers();

  //  --  Get User  --  
  const user = await db.User.findOne({userName:"Akuma"});

  await seedChatrooms(user);

  const chatroom = await db.Chatroom.findOne({name:"Hello World"});

  const postSeed = [
    {
      body: "Hello World!",
      sender: user._id,
      room: chatroom._id,
      deleted: false,
      updated: false,
      timestamp:Date.now()
    }
  ]
  
    db.Post
    .remove({})
    .then(() => db.Post.collection.insertMany(postSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  
}


seedChats();