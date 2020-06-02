import React from "react";
import moment from 'moment'


function Message({ members, body, deleted, updated, sender, yours, id, getMsg, time }) {

  const userImage = members ? members.find(member => member.user === sender).image : "";
  return (
    <div className={"col s12 white-text"} onClick={() => getMsg(body, id, sender)}>
      <div>
        {moment(time).format('h:mm:ss a')}
      </div>
      <div className={`col s1 center-align valign-wrapper`}>
      {userImage?
          <img src={userImage} alt="avatar image" className="circle" height="32" width="32"></img> 
          :
          ""
        }
      </div>
      <div className={`message col s10 left-align ${yours ? "red" : "teal"} ${deleted ? "fade" : ""}`}>
        {
          deleted ? "" :
            `${body} ${updated ? "  (Updated)" : ""}`}
        {/*yours? <i className="far fa-edit"></i> :""*/}
      </div>
    </div>
  )
}

export default Message;