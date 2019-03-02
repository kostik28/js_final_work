import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => {
  return (

    <div className='user'>

      <h1 className='user-title'>
        {props.selectedUser.login}
      </h1>

      <div className='user-block'>

        <div className='user-select'>

          <img className='user-img' src={props.selectedUser.picture.large}/>

          <span className='user-fio'>{props.selectedUser.name.first} {props.selectedUser.name.last}</span>

          {props.loggedUser !== null && props.selectedUser.id === props.loggedUser.id &&
            <button
              className='btn user-btn'
              onClick={() => props.signOutUser(null)}>
              sign out
            </button>}

        </div>

        {props.prevUser !== undefined &&
        <div className='user-nav user-prev'>
          <Link to={'/users/' + props.prevUser.id}>
            <img
              className='user-nav__img'
              src={props.prevUser.picture.medium}/>
          </Link>
          <span className='user-subnav'>prev</span>
        </div>}

        {props.nextUser !== undefined &&
        <div className='user-nav user-next'>
          <Link to={'/users/' + props.nextUser.id}>
            <img
              className='user-nav__img'
              src={props.nextUser.picture.medium}/>
          </Link>
          <span className='user-subnav'>next</span>
        </div>}

      </div>

    </div>

  )
};