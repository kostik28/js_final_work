import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as modalActions from '../../actions/ModalActions'
import * as postActions from '../../actions/PostActions'

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.postActions.onLoadPosts();
  }

  render() {
    return(
      <div>
        <h4>Список постов</h4>
        <button
          onClick={(e) => this.props.modalActions.openModalForm(e.target.innerHTML)}>
          new post
        </button>
        {
          this.props.posts.map((post, i) => {
            return (
              <div key={i}>
                <p>{post.id}, email: {post.title}</p>
                <Link to={'/posts/' + post.id}>
                  перейти к посту
                </Link>
              </div>
            );
          })
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  ...state.post
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch),
  postActions:  bindActionCreators(postActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default Wrapped;