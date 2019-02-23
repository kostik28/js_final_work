import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return(
      <div>
        <p>login: {props.selectedUser.login}</p>
          <p>email: {props.selectedUser.email}</p>
        <Link to='/users'>перейти назад</Link>
        <div>{props.nextUser !== undefined && <Link to={'/users/' + props.nextUser.id}>Вперед</Link>}</div>
        <div>{props.prevUser !== undefined && <Link to={'/users/' + props.prevUser.id}>Назад</Link>}</div>
        {props.loggedUser !== null && props.selectedUser.id === props.loggedUser.id &&
        <button
          onClick={() => props.signOutUser(null)}>sign out</button>}
      </div>
    );
}
