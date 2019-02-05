import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import actions from '../../actions/index';

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.actions.getPostsList();
  }

  render() {
    return(
      <div>
        <h4>Список постов</h4>
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

const mapStateToProps = state => {
  return{
    posts: state.user.posts
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default Wrapped;