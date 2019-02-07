import React from 'react'
import {bindActionCreators} from "redux";
import actions from "../../../actions";
import {connect} from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return(
      <div>
        <div>
          <input
            name='login'
            autoComplete='on'
            autoFocus
            onChange={(e) => this.props.actions.saveLoginInputValue(e.target.value)}
          />
          <input
            name='password'
            type="password"
            onChange={(e) => this.props.actions.savePasswordInputValue(e.target.value)}
          />
        </div>

        <button
          disabled={
            this.props.loginInputValue === null
            || this.props.passwordInputValue === null
            ||this.props.loginInputValue.length <= 0
            || this.props.passwordInputValue.length <= 0
          }
          onClick={(e) =>{
            let loggedUser = {};
            const foundUser = this.props.users.find((user) => user.login === this.props.loginInputValue);
            if (foundUser !== undefined) {
              if(foundUser.password === this.props.loginInputValue) {
                loggedUser = foundUser;
              }
            }
            this.props.actions.onLogin(loggedUser)
          }}>
          login
        </button>
      </div>
    )

  }


}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Wrapped;