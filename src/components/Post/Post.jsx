import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  return(
    <div>
      <p>title: {props.selectedPost.title}</p>
      <Link to='/posts'>перейти назад</Link>
      <div>{props.nextPost !== undefined && <Link to={'/posts/' + props.nextPost.id}>Вперед</Link>}</div>
      <div>{props.prevPost !== undefined && <Link to={'/posts/' + props.prevPost.id}>Назад</Link>}</div>
    </div>
  );
}
