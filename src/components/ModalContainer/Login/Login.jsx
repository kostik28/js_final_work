import React from 'react'
import {bindActionCreators} from "redux";
import actions from "../../../actions";
import {connect} from "react-redux";
import Modal from "../LoggedUser/LoggedUser";

class Login extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return(

      <section>
        <Modal
          visible={this.props.isOpenedModalForm}
          width="100%"
          height="100%"
          effect="fadeInUp"
        >
          <div>
            <div>
              <label>
                Login
              </label>
              <input
                name='login'
                autoComplete='on'
                autoFocus
                onChange={(e) => this.props.actions.saveLoginInputValue(e.target.value)}
              />
              <label>
                Password
              </label>
              <input
                name='password'
                type="password"
                onChange={(e) => this.props.actions.savePasswordInputValue(e.target.value)}
              />
            </div>
            {this.props.messageToUser !== null &&
            <div>
              {this.props.messageToUser}
            </div>}
            <button
              disabled={
                this.props.loginInputValue === null
                || this.props.passwordInputValue === null
                || this.props.loginInputValue.length <= 0
                || this.props.passwordInputValue.length <= 0
              }
              onClick={(e) =>{
                const foundUser = this.props.users.find((user) => user.login === this.props.loginInputValue);
                if (foundUser !== undefined) {
                  this.props.actions.onLoginArraySearch(foundUser);
                }else{
                  this.props.actions.onLogin(this.props.loginInputValue);
                }
              }}>
              login
            </button>
          </div>
        </Modal>
      </section>
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