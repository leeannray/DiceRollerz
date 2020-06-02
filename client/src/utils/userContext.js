import React from "react";

const UserContext = React.createContext({
  user:{},
  token:"notSet"
});

export default UserContext;
