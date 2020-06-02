import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

//Import CSS
import "./login.css"


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:false,
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.user._id) {
      console.log("Congrats!" + this.props.user.username )
      this.setState( {isLoggedIn:true})
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token !=="NotSet") {
      //console.log("Congrats!")
      this.setState( {isLoggedIn:true})
    }
    // if (nextProps.errors) {
    //   this.setState({
    //     errors: nextProps.errors
    //   });
    // }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    loginUser(userData)
    .then(token =>{
      if(token){
        this.props.setToken(token);
      }
    })
  };

  

render() {
  const { errors, isLoggedIn } = this.state;
  return (

    <div className="container">
      {isLoggedIn? <Redirect to={"/chat"}/>:""}
      <div className = "card blue-grey darken-1 center-align">
        <div className="row section">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
                home
              </Link>
            <div className="col s12">
              <h4>
                <b>Login</b> below
                </h4>
              <p className="grey-text text-lighten-1">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  className={classnames("", {
                    invalid: errors.username || errors.usernameincorrect
                  })}
                />
                <label htmlFor="username">Username</label>
                <span className="red-text">
                    {errors.username}
                    {errors.usernameincorrect}
                  </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large red hoverable"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
}

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login);
export default Login;
