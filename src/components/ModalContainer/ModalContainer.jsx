import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as modalActions from '../../actions/ModalActions'
import * as loginActions from '../../actions/LoginActions'

import Login from './Login/Login'
import LoggedUser from './LoggedUser/LoggedUser'
import NewPost from './NewPost/NewPost'
import Search from './Search/Search'

class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  openModalForm() {
    if (this.props.nameModal === 'search') {
      return (
        <Search
          isOpenedModal={this.props.isOpenedModal}
          onCloseModal={this.props.modalActions.onCloseModal}/>
      )
    } else if (this.props.nameModal === 'login') {
      return (
        <Login
          isOpenedModal={this.props.isOpenedModal}
          onCloseModal={this.props.modalActions.onCloseModal}
          onChangedLogin={this.props.loginActions.onChangedLogin}
          onChangedPassword={this.props.loginActions.onChangedPassword}
          messageToUser={this.props.messageToUser}
          onLogin={this.props.loginActions.onLogin}
          loginInputValue={this.props.loginInputValue}
        />
        )
    } else if (this.props.nameModal === 'new post') {
      return <NewPost/>
    } else if (this.props.loggedUser !== null
      && this.props.nameModal === 'Hi, ' + this.props.loggedUser.login) {
      return (
        <LoggedUser
          isOpenedModal={this.props.isOpenedModal}
          onCloseModal={this.props.modalActions.onCloseModal}/>
      )
    }
  }

  render() {
    return (
      <div>
        {this.openModalForm()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.modal,
  ...state.login
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch),
  loginActions: bindActionCreators(loginActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

export default Wrapped;