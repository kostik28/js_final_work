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
      <div className='users'>

        <h1 className='users-title'>
          users
        </h1>

        <div className='users-block'>
        {
          this.props.users.map((user, i) => {
            return (
                <div className='users-user' key={i}>
                  <Link to={'/users/' + user.id}>
                    <div className='users-inner'>
                      <div className="users-img">
                        <img src={user.picture.medium}/>
                      </div>
                      <div className='users-info'>
                        <span> <b>login:</b> {user.login}</span>
                        <span> <b>email:</b> {user.email}</span>
                        <span> <b>phone:</b> {user.phone}</span>
                      </div>
                    </div>
                  </Link>
              </div>
            );
          })
        }
        </div>
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