import React, { useState, useContext, useEffect } from "react";
import userContext from "../../utils/userContext";
import "./signup.css"
import { Container } from "../../components/Grid";
import { Link, Redirect } from "react-router-dom"
import API from "../../utils/API"

import { loginUser } from "../../actions/authActions";



function SignUp() {
  const [userSubmission, setUserSubmission] =
    useState({
      username: "",
      password: "",
      password2: "",
      email: "",
      firstName: "",
      lastName: ""
    });
  // used for redirect if user just signed up
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (isValid) {
      // code for login here
      const userData = {
        username: userSubmission.username,
        password: userSubmission.password
      };
      loginUser(userData)
        .then(token => {
          setToken(token);
        })
    }
  }, [isValid])

  // use for redirect if user is already signed in
  const { token, setToken } = useContext(userContext);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (token) {
      console.log(token);
      const auth = token === 'NotSet' ? false : true;
      setIsAuth(auth);
    }
  }, [token])


  /*#############################
  Helper Functions
  ###############################*/

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserSubmission({ ...userSubmission, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (true) {
      API.signUpNewUser(
        userSubmission
      ).then(data => {
        console.log(data)
        // if sign up is valid...
        if (data.status === 200) {
          setIsValid(true);
        }
      })
        .catch(err => console.log(err))
    }
  }


  return (
    <Container>
      {isAuth ? <Redirect to="/chat" /> : ""}
      <div className="center center-align flex flex-align-center">
        <div className="col s12 m7 xl10">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">

              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to home
                </Link>
              <div className="section">
                <div className="col s12">
                  <h4 className="black-text">
                    <b>SignUp</b> below
                </h4>
                  <p className="grey-text text-lighten-1">
                    Already have an account? <Link to="/login">Log In</Link>
                  </p>
                </div>
              </div>

              <div className="container center-align">
                <input
                  placeholder="Username"
                  name="username"
                  onChange={handleInputChange}
                  type="text"
                  className="validate white-text center-align"
                  required="true"
                  aria-required="true">
                </input>

                <input
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  className="validate white-text center-align"
                  required="true"
                  aria-required="true"
                  minLength="6">
                </input>

                <input
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                  name="password2"
                  type="password"
                  className="validate white-text center-align"
                  required="true"
                  aria-required="true"
                  minLength="6">
                </input>

                <input
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  className="validate white-text center-align"
                  required="true"
                  aria-required="true">
                </input>

                <input
                  placeholder="First Name"
                  onChange={handleInputChange}
                  name="firstName" type="text"
                  className="validate white-text center-align"
                  required="true"
                  aria-required="true">
                </input>

                <input
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  name="lastName" type="text"
                  className="validate white-text center-align"
                  required="true"
                  aria-required="true">
                </input>
                <div className="helper-text center-align bold" data-error="You Dishonor Me" data-success="You Chose Wisely">Choose Wisely</div>
              </div>
            </div>
            <div className="card-action">
              <button className="waves-effect waves-light btn red accent" onClick={handleFormSubmit}> Sign Up </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignUp