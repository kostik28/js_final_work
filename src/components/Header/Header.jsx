import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  function getLogin(text) {
    let sliced = text.slice(0, 9);
    if (sliced.length < text.length) {
      sliced += '...';
    }
    return sliced;
    }

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
        <Link className='header-link' to={obj.path}>{obj.name}</Link>
      </li>
    );
  }

  function getLinkTologo(obj, i) {

    return(
      <li key={i}>
        <Link
          to={obj.path}
          className='header-logo'>
          <img
            className='header-img'
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
      linkName = 'Hi, ' + getLogin(loggedUser.login)
    }

    let block;
    if (loggedUser !== null && linkName === 'Hi, ' + loggedUser.login) {
      block = (
        <Link
          to={'/users/' + loggedUser.id}
          className='header-link'>
          {linkName}
        </Link>)
    } else {
      block = (
        <a
          className='header-modal'
          onClick={(e) => {props.onOpenModal(e.target.innerHTML)}}>
          {linkName}
        </a>)
    }

    return(
      <li key={i}>
        {block}
      </li>
    );
  }

  return (
    <nav className='header'>
      <ul className='header-menu'>
        {completeMenu()}
      </ul>
    </nav>
  );

}
