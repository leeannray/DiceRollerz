import React,{useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import userContext from '../../utils/userContext';

function Authenticate(){
  const {token} = useContext(userContext);
  const [isAuth, setIsAuth] = useState(true);

  useEffect( ()=>{
    if (token){
      const auth = token==='NotSet'?false:true;
      setIsAuth(auth);
  }
  },[token])

  return(
    <div>
        {isAuth? "":<Redirect to="/login" />}
    </div>
    )
};

export default Authenticate;