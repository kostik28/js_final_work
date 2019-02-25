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

  displayCol(arr, rest, counter) {
    return arr.filter((item, i) => i % 3 === rest)
    .map(post => {
      return (
        <div className='posts-blok' key={counter()}>
          <article className='posts-article'>

          </article>
          <p>{post.id}, email: {post.title}</p>
          <Link
            to={'/posts/' + post.id}
          >
            перейти к посту
          </Link>
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

        <h4>Список постов</h4>

        {this.props.loggedUser !== null &&
          <button
            onClick={(e) => this.props.modalActions.onOpenModal(e.target.innerHTML)}>
            new post
          </button>
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