import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from "redux";
import * as postActions from "../../actions/PostActions";
import {connect} from "react-redux";

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  displayImages(arr, rest, counter) {
    return arr.filter((item, i) => i % 2 === rest)
    .map(obj => {
      return (
        <img key={counter()} src={obj} alt='Картинка'/>
      )
    })
  };

  makeCounter() {
    let currentCount = 1;
    return () => currentCount++
  };

  render() {
    const selectedPost = this.props.selectedPost;
    const counter = this.makeCounter();
    const postAuthor = this.props.users.filter(user => user.id === selectedPost.idUser);
    console.log(this.props);
    return (
      <div>
        <p>title: {selectedPost.title}</p>
        <Link to={'/users/' + postAuthor.id}><button>{postAuthor.login}</button></Link>
        {this.props.loggedUser === postAuthor
          && <button>{selectedPost.likes.length + ' likes'}</button>}
        <button>edit</button>
        <div>
          <div>{this.displayImages(selectedPost.images, 0, counter)}</div>
          <div>{this.displayImages(selectedPost.images, 1, counter)}</div>
        </div>
        <div>{selectedPost.text}</div>
        <Link to='/posts'>перейти назад</Link>
        <div>{this.props.nextPost !== undefined && <Link to={'/posts/' + this.props.nextPost.id}>Вперед</Link>}</div>
        <div>{this.props.prevPost !== undefined && <Link to={'/posts/' + this.props.prevPost.id}>Назад</Link>}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
  ...state.login
});

const mapDispatchToProps = dispatch => ({
  postActions: bindActionCreators(postActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Post);
export default Wrapped;
