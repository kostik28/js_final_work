import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as modalActions from '../../actions/ModalActions'

import Login from './Login/Login'
import LoggedUser from './LoggedUser/LoggedUser'
import NewPost from './NewPost/NewPost'
import Search from './Search/Search'

class ModalContainer extends React.Component {
  constructor(props){
    super(props)
  }

  openModalForm() {
    if (this.props.nameModal === 'search') {
      return<Search />
    }else if (this.props.nameModal === 'login') {
      return <Login/>
    } else if (this.props.nameModal === 'new post') {
      return <NewPost />
    } else if (this.props.loggedUser !== null
      && this.props.nameModal === 'Hi, ' + this.props.loggedUser.login) {
      return (
        <LoggedUser
          isOpenedModalForm={this.props.isOpenedModal}
          onCloseModalForm={this.props.modalActions.onCloseModal}/>
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
  ...state.user,
  ...state.modal
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

export default Wrapped;