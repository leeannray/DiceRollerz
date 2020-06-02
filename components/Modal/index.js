import React, { Component } from "react";
import M from "materialize-css";

import NewChatForm from "../NewChatForm";
import AddUserForm from "../AddUserForm";


class NewChatModal extends Component {

  componentDidMount() {
    const options = {
      // onOpenStart: () => {
      //   console.log("Open Start");
      // },
      // onOpenEnd: () => {
      //   console.log("Open End");
      // },
      // onCloseStart: () => {
      //   console.log("Close Start");
      // },
      // onCloseEnd: () => {
      //   console.log("Close End");
      // },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <div 
          className="pointer btn red modal-trigger"
          data-target="modal1"
        >
          <i className="fas fa-comment-medical"></i>
        </div>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
            <NewChatForm onAddChatroom={this.props.onAddChatroom} />
          </div>
        </div>
    );
  }
}

class AddUserModal extends Component {
  componentDidMount() {
    const options = {
      // onOpenStart: () => {
      //   console.log("Open Start");
      // },
      // onOpenEnd: () => {
      //   console.log("Open End");
      // },
      // onCloseStart: () => {
      //   console.log("Close Start");
      // },
      // onCloseEnd: () => {
      //   console.log("Close End");
      // },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

  }

  render() {
    return (
      <div>
        <a
          className="btn red modal-trigger"
          data-target="modal2"
        >
          <i className="fas fa-user-plus"></i>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
            <AddUserForm 
              chatRoom={this.props.chatRoom}
            />
          </div>
        </div>
    );
  }
}

export { NewChatModal, AddUserModal };
