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
        <Link to={obj.path}><img src='../../img/logo.png'/></Link>
      </li>
    );
  }

  getLinkToModal(obj, i){
    return(
      <li key={i}>
        <a onClick={(e) => this.props.showModalForm(e.target.innerText)}>
          {obj.name}
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