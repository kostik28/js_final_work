import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  function completeMenu() {
    return (
      props.pages.map((obj, i) => {
        if (obj.modal === '' && obj.name !== 'logo') {
          return getLinkToLink(obj, i);
        }else if(obj.name === 'logo'){
          return getLinkTologo(obj, i);
        }else if(obj.path === ''){
          return getLinkToModal(obj, i);
        }
      })
    )
  }

  function getLinkToLink(obj, i) {
    return (
      <li key={i}>
        <Link to={obj.path}>{obj.name}</Link>
      </li>
    );
  }

  function getLinkTologo(obj, i) {
    return(
      <li key={i}>
        <Link
          to={obj.path}>
          <img
            src='../../img/logo.png'
            alt='Логотип'/>
        </Link>
      </li>
    );
  }

  function getLinkToModal(obj, i){
    let linkName = obj.name;

    const loggedUser = props.loggedUser;
    if(loggedUser !== null && obj.name === 'login') {
      linkName = 'Hi, ' + loggedUser.login
    }

    let blok;
    if (loggedUser !== null && linkName === 'Hi, ' + loggedUser.login) {
      blok = (
        <Link
          to={'/users/' + loggedUser.id}>
          {linkName}
        </Link>)
    } else {
      blok = (
        <a onClick={(e) => {props.onOpenModal(e.target.innerHTML)}}>
          {linkName}
        </a>)
    }

    return(
      <li key={i}>
        {blok}
      </li>
    );
  }

  return (
    <header>
      <ul>
        {completeMenu()}
      </ul>
    </header>
  );

}
