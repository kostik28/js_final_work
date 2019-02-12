import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as userActions from '../../actions/UserActions';

class Users extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.userActions.onLoadUsers();
  }

  render() {
    return(
      <div>
        <h4>Список пользователей</h4>
        {
          this.props.users.map((user, i) => {
            return (
              <div key={i}>
                <p>{user.login}, email: {user.email}</p>
                <Link to={'/users/' + user.id}>
                  перейти к пользователю
                </Link>
              </div>
            );
          })
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
    ...state.user
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Users);
export default Wrapped;