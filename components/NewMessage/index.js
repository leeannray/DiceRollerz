import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function NewMessage(props) {
  const { user, currentChatroom, isEditingMsg, setIsEditingMsg, refreshMessages, editMsg} = props;

  const [newMessage, setNewMessage] = useState({
    sender: user.username,
    room: "",
    body: ""
  });

  // Update new message when editing is enabled.
  useEffect(() => {
    if(isEditingMsg){
      setNewMessage(editMsg);
    }
  }, [isEditingMsg])

  // set sender for new message form once user context is loaded.
  useEffect(() => {
    setNewMessage({ sender: user._id })
  }, [user])

  useEffect( ()=>{
    console.log("setting room");
    setNewMessage({ ...newMessage, room: currentChatroom, body:""})
  } ,[currentChatroom])

    /* Message helpers Helpers
  ==================================== */

  // Function to handle users submitting new messages to a specific chatroom
  async function handleMsgSubmit(event) {
    event.preventDefault();
    console.log(newMessage);
    if (newMessage.sender && newMessage.room && newMessage.body) {
      try {
        if (!isEditingMsg) {
          await API.sendPost(newMessage)
        } else {
          console.log(newMessage);
          await API.editPost(newMessage);
          setIsEditingMsg(false)
        }
        setNewMessage({ ...newMessage, body: "" });
        refreshMessages(currentChatroom)
      }
      catch (err) { console.log(err); }
    }
  };

  // Function to handle users inputing new messages, and updating the state to reflect this.
  function handleInputChange(event) {
    const { value } = event.currentTarget;
    setNewMessage({ ...newMessage, body: value })
  };

  /* Render Display
  ==================================== */
  return (
    <div>
      {currentChatroom ?
        <form className="row flex flex-align-center">
          <div className="input-field col flex-grow">
            <textarea id="message" value={newMessage.body} onChange={handleInputChange} className="materialize-textarea white-text" ></textarea>
            <label htmlFor="message">{(!isEditingMsg ? "New Message" : "Edit Message")}</label>
          </div>
          <div className="col">
            <button className="btn red accent" onClick={handleMsgSubmit}>Submit
            </button>
          </div>
        </form>
        : ""
      }
    </div>
  )
}

export default NewMessage;