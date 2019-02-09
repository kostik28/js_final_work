import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  completeMenu() {
    return (
      this.props.pages.map((obj, i) => {
        if (obj.modal === '' && obj.name !== 'logo') {
          return this.getLinkToLink(obj, i);
        }else if(obj.name === 'logo'){
          return this.getLinkTologo(obj, i);
        }else if(obj.path === ''){
          return this.getLinkToModal(obj, i);
        }
      })
    )
  }

  getLinkToLink(obj, i){
    return (
      <li key={i}>
        <Link to={obj.path}>{obj.name}</Link>
      </li>
    );
  }

  getLinkTologo(obj, i){
    return(
      <li key={i}>
        <Link to={obj.path}><img src='../../img/logo.png' alt='Логотип'/></Link>
      </li>
    );
  }

  getLinkToModal(obj, i){

    let linkName = obj.name;
    if(this.props.loggedUser !== null && obj.name === 'login') {
      linkName = 'Hi, ' + this.props.loggedUser.login
    }

    return(
      <li key={i}>
        <a onClick={(e) => {this.props.showModalForm(e.target.innerHTML)}}>
          {linkName}
        </a>
      </li>
    );
  }

  render() {
    return (
      <header>
        <ul>
          {this.completeMenu()}
        </ul>
      </header>
    );
  }
}