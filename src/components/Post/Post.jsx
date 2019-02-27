import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from "redux";
import * as postActions from "../../actions/PostActions";
import * as modalActions from "../../actions/ModalActions";
import {connect} from "react-redux";

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  displayImages(arr, rest, counter) {
    return arr.filter((item, i) => i % 2 === rest)
    .map(obj => {
      return (
          <img
            className='images-img'
            key={counter()}
            src={obj}
            alt='Картинка'/>
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
    console.log(this.props);
    const selectedPost = this.props.selectedPost;
    const counter = this.makeCounter();
    const postAuthor = this.props.users.find(user => user.id === selectedPost.idUser);
    return (
      <section className='wrapper'>
        <div className='post'>

          {this.props.prevPost !== undefined &&
            <div className='post-nav__left post-nav'>

              <Link
                className='post-link'
                to={'/posts/' + this.props.prevPost.id}>

                <div className='post-item post-item__left'>
                  {this.props.prevPost.title.slice(
                    this.props.prevPost.title.length - 4,
                    this.props.prevPost.title.length)}
                </div>

                <span className='post-subnav post-subnav__left'>
                  Prev
                </span>

              </Link>

            </div>}

          <div className='post-content'>
            <article>
              <div className='post-content__info'>

                <h1 className='post-content__title'>{selectedPost.title}</h1>

                <div className='post-content__buttons'>
                  <Link
                    to={'/users/' + postAuthor.id}>
                    <button className='btn'>
                      {postAuthor.login}
                    </button>
                  </Link>

                  <button
                    className='btn'
                    disabled={this.props.loggedUser === null || this.props.loggedUser.id === postAuthor.id}
                    onClick={(e) => this.putLike(e.target)}>
                      {selectedPost.likes.length + ' likes'}
                  </button>

                  {this.props.loggedUser !== null && this.props.loggedUser.id === postAuthor.id &&
                    <button
                      className='btn'
                      onClick={(e) => this.props.modalActions.onOpenModal(e.target.innerHTML, selectedPost)}>
                      edit
                    </button>}
                </div>

                <div className='post-content__text'>{selectedPost.body}</div>
              </div>

              <div className='post-content__images'>
                <div className='images-block'>
                  <div className='images-column'>{this.displayImages(selectedPost.images, 0, counter)}</div>
                  <div className='images-column'>{this.displayImages(selectedPost.images, 1, counter)}</div>
                </div>
              </div>

            </article>
          </div>

          {this.props.nextPost !== undefined &&
          <div className='post-nav__right post-nav'>

            <Link
              className='post-link'
              to={'/posts/' + this.props.nextPost.id}>

              <div className='post-item post-item__right'>
                {this.props.nextPost.title.slice(
                  this.props.nextPost.title.length - 4,
                  this.props.nextPost.title.length)}
              </div>

              <span className='post-subnav post-subnav__right'>
                Next
              </span>

            </Link>

          </div>}

        </div>
      </section>

    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
  ...state.login
});

const mapDispatchToProps = dispatch => ({
  postActions: bindActionCreators(postActions, dispatch),
  modalActions: bindActionCreators(modalActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Post);
export default Wrapped;
