import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Modal from "../LoggedUser/LoggedUser";

import * as loginActions from '../../../actions/LoginActions'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (

      <section>
        <Modal
          visible={this.props.isOpenedModal}
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
                onChange={(e) => this.props.loginActions.onChangedLogin(e.target.value)}
              />
              <label>
                Password
              </label>
              <input
                name='password'
                type="password"
                onChange={(e) => this.props.loginActions.onChangedPassword(e.target.value)}
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
              onClick={(e) => {
                this.props.loginActions.onLogin(this.props.loginInputValue)
              }}
            >login
            </button>
          </div>
        </Modal>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  ...state.user,
  ...state.login,
  ...state.modal
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Wrapped;