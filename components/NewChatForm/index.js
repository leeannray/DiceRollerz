import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";

function NewChatform({ onAddChatroom }){

  const { user } = useContext(UserContext);

  const [newChatroom, setNewChatroom] = useState({
    name:"",
    members:[]
  });

  function handleNewChatroomForm(event){
    const {value} = event.target;
    setNewChatroom({...newChatroom, name: value})
  }

  function submitNewChat(){
    API.createNewChatroom(newChatroom);
    if (onAddChatroom) onAddChatroom();
  }


  useEffect(() => {
    setNewChatroom( {...newChatroom, members: [{
      user: user._id,
      role:"DM"
    }]})
  }, [user])


  return(
    <div> 
      <div className="modal-content blue-grey darken-3 white-text" >
      <h4><b>New Chatroom</b></h4>
      <form onSubmit={submitNewChat}>
        
        <div className="input-field col s6">
          <input value={newChatroom.name} onChange={handleNewChatroomForm}id="chatName" type="text" className="validate white-text" />
            <label className="active" htmlFor="chatName">Chatroom Name</label>
        </div>
        
      </form>
    </div>
      <div className="modal-footer blue-grey darken-3">
        <button className="modal-close waves-effect red btn">
          Cancel
        </button>
        <button className="modal-close waves-effect red btn" onClick={submitNewChat}>
          Create
        </button>
      </div>
    </div>
  )
}

export default NewChatform;
