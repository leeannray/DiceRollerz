import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";
import chat from "material-ui/svg-icons/communication/chat";

function AddUserForm({ chatRoom }){
  const [allUsers, setAllUsers] = useState([]);

  function clickAddHandler(event) {
    event.preventDefault();
    
    let newUser = {
      user: event.target.id,
      role: "Roller"
    }
    
    console.log(chatRoom);
    chatRoom.members.push(newUser);
    API.addChatroomMember(chatRoom._id, newUser)
      .then(data => console.log("Added member to chatroom " + chatRoom._id, data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    API.getUsers()
      .then(data => {
        if (!data.data) {
          console.error("Error retrieving users!")
          return;
        }
        let userArray = data.data;
        userArray.sort((a, b) => a.username > b.username ? 1 : a.username === b.username ? 0 : -1)
        setAllUsers(data.data);
      })
      .catch(err => console.error(err))
  })

  let x = -1;
  return(
      <div className="modal-content blue-grey darken-3 white-text">
        <h4>Add Users</h4>
        <div className="users-field col s6" style={{height: "80%", overflow: "auto"}}>
          <ul>
            {allUsers.map(currentUser => {
                if ((!chatRoom.members.find(item => item.user === currentUser._id))) {
                  x++;

                  return (
                    <p>
                      {currentUser.username} 
                      <a id={currentUser._id} className="btn-small waves-effect red right" onClick={clickAddHandler} key={x}>
                        +
                      </a>
                    </p>
                  )
                }
            })}
          </ul>
        </div>
        <div className="modal-footer blue-grey darken-3">
          <a className="modal-close waves-effect red btn">
            Close
          </a>
        </div>
    </div>
  )
}

export default AddUserForm;
