const express = require("express");
// const http = require('http').createServer(app);

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// const passport = require("passport");
// // const users = require("./routes/api/user");
// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// // app.use("/api/users", users);


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Rollerz");
mongoose.set('useFindAndModify', false);


//Instance of Socket IO Listening
var http = require('http').createServer(app);
var io = require('socket.io')(http)

io.on('connection', (socket) => {
  //connection
  console.log('a user connected');
  
  // disconnection
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // chat message
  socket.on('chatMessage', (msg) => {
    console.log('message: ' + msg);
    socket.broadcast.emit("newMessage", msg);
  });

//  Chat Socket Listener goes here

  socket.on('chatroomEdit', (msg) => {
    console.log('room: ', msg);
    socket.broadcast.emit("chatroomChanged", msg);
  })
});



// Start the API server
http.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// const bodyParser = require("body-parser");
// Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// DB Config
// const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));