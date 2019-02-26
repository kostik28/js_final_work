import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as modalActions from '../../actions/ModalActions'
import * as postActions from '../../actions/PostActions'
import * as userActions from '../../actions/UserActions'

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.postActions.onLoadPosts();
    this.props.userActions.onLoadUsers();
  }

  makeCounter() {
    let currentCount = 0;
    return () => currentCount++
  };

  getPostText(text) {
    let sliced = text.slice(0, 245);
    if (sliced.length < text.length) {
      sliced += '...';
    }
    return sliced;
  }

  displayCol(arr, rest, counter) {
    return arr.filter((item, i) => i % 3 === rest)
    .map(post => {
      return (
        <div className='posts-block' key={counter()}>
          <article className='posts-article'>
            <Link
              className='article-link'
              to={'/posts/' + post.id}>
              <div className='article-block'>
                <img className='article-img' src={post.image} alt='Картинка'/>
              </div>
              <h3 className='article-title'>{post.title}</h3>
              <p className='article-text'>{this.getPostText(post.body)}</p>
            </Link>
          </article>

        </div>
      )
    })
  };

  makeCounter() {
    let currentCount = 1;
    return () => currentCount++
  };

  render() {
    const counter = this.makeCounter();
    return(
      <div className='posts'>

        {this.props.loggedUser !== null &&
          <div
            className='posts-btn__block'>
            <button
              className='posts-btn__login btn'
              onClick={(e) => this.props.modalActions.onOpenModal(e.target.innerHTML)}>
              new post
            </button>
          </div>
        }

        <div className='posts-inner'>
          <div className='posts-container'>{this.displayCol(this.props.posts, 0, counter)}</div>
          <div className='posts-container'>{this.displayCol(this.props.posts, 1, counter)}</div>
          <div className='posts-container'>{this.displayCol(this.props.posts, 2, counter)}</div>
        </div>

      </div>
    )
  }

}

const mapStateToProps = state => ({
  ...state.post,
  ...state.login
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch),
  postActions: bindActionCreators(postActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default Wrapped;