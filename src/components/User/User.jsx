import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return(
      <div>
        <p>login: {props.selectedUser.login}</p>
        <Link to='/users'>перейти назад</Link>
        <div>{props.nextUser !== undefined && <Link to={'/users/' + props.nextUser.id}>Вперед</Link>}</div>
        <div>{props.prevUser !== undefined && <Link to={'/users/' + props.prevUser.id}>Назад</Link>}</div>
      </div>
    );
}
