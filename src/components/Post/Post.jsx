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

  putLike(elem) {
    const post = this.props.selectedPost;
    const user = this.props.loggedUser;
    const searchId = post.likes.find(id => id === user.id);
    if (searchId === undefined) {
      post.likes.push(user.id);
    } else {
      post.likes = post.likes.filter(id => id !== user.id);
    }
    elem.innerHTML = post.likes.length + ' likes';
    this.props.postActions.setPosts(post);
  };

  render() {
    const selectedPost = this.props.selectedPost;
    const counter = this.makeCounter();
    const postAuthor = this.props.users.find(user => user.id === selectedPost.idUser);
    return (
      <div>
        <Uploader/>
        <p>title: {selectedPost.title}</p>
        <Link
          to={'/users/' + postAuthor.id}
        >
          <button>
            {postAuthor.login}
          </button>
        </Link>

        <button
          disabled={this.props.loggedUser === null || this.props.loggedUser === postAuthor}
          onClick={(e) => this.putLike(e.target)}
        >
          {selectedPost.likes.length + ' likes'}
        </button>

        {this.props.loggedUser !== null && this.props.loggedUser === postAuthor &&
          <button>edit</button>
        }

        <div>
          <div>{this.displayImages(selectedPost.images, 0, counter)}</div>
          <div>{this.displayImages(selectedPost.images, 1, counter)}</div>
        </div>

        <p>text: {selectedPost.body}</p>

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
