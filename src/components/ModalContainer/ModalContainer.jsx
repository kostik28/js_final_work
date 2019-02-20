import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as modalActions from '../../actions/ModalActions'
import * as loginActions from '../../actions/LoginActions'
import * as postActions from '../../actions/PostActions'

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
          passwordInputValue={this.props.passwordInputValue}
        />
        )
    } else if (this.props.nameModal === 'new post' || this.props.nameModal === 'edit') {
      return (
        <NewPost
          isOpenedModal={this.props.isOpenedModal}
          onCloseModal={this.props.modalActions.onCloseModal}
          loggedUser={this.props.loggedUser}
          titleInputValue={this.props.titleInputValue}
          textInputValue={this.props.textInputValue}
          messageToUser={this.props.messageToUser}
          isModifiedForm={this.props.isModifiedForm}
          onChangedText={this.props.postActions.onChangedText}
          onChangedTitle={this.props.postActions.onChangedTitle}
          savePost={this.props.postActions.savePost} />
        )
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
  ...state.login,
  ...state.post
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch),
  loginActions: bindActionCreators(loginActions, dispatch),
  postActions: bindActionCreators(postActions, dispatch),
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

export default Wrapped;