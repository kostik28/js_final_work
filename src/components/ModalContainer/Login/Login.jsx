import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Modal from 'react-awesome-modal'

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
          width="400"
          height="300"
          effect="fadeInUp"
        >
          <div>
            <div>
              <label>
                Login
              </label>
              <input
                name='login'
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
            {this.props.messageToUser !== null
              &&
            <div>{this.props.messageToUser}</div>}
            <button

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
  ...state.login,
  ...state.modal,
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Wrapped;