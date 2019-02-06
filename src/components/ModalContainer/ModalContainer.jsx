import React from 'react'
import {bindActionCreators} from "redux";
import actions from "../../actions";
import {connect} from "react-redux";

import Login from './Login/Login'
import NewPost from './NewPost/NewPost'
import Search from './Search/Search'

class ModalContainer extends React.Component {
  constructor(props){
    super(props)
  }

  openModalForm() {
    if (this.props.nameModalForm === 'search') {
      return<Search />;
    }else if (this.props.nameModalForm === 'login') {
      return <Login/>;
    } else if (this.props.nameModalForm === 'new post') {
      return <NewPost />;
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
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

export default Wrapped;