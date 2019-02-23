import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as modalActions from '../../actions/ModalActions'
import * as loginActions from '../../actions/LoginActions'
import * as postActions from '../../actions/PostActions'

import Login from './Login/Login'
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
          props={this.props} />
      )
    } else if (this.props.nameModal === 'new post' || this.props.nameModal === 'edit') {
      return (
        <NewPost
          props={this.props}/>
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