import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as modalActions from '../../actions/ModalActions'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ModalContainer from '../ModalContainer/ModalContainer'
import Users from '../Users/Users'
import User from '../User/User'
import Post from '../Post/Post'
import Posts from '../Posts/Posts'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.isOpenedModal &&
          <ModalContainer />
        }
        <Header
          pages={this.props.pages}
          loggedUser={this.props.loggedUser}
          onOpenModal={this.props.modalActions.onOpenModal}/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to='/posts' />}
          />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/users" component={Users} />
          <Route
            path="/posts/:id"
            exact
            render={(props) => {
              const postId = +props.match.params.id;
              const selectedPost = this.props.posts.find((post) => post.id === postId);
              const nextPost = this.props.posts.find((post) => post.id === postId + 1);
              const prevPost = this.props.posts.find((post) => post.id === postId - 1);
              return <Post selectedPost={selectedPost} nextPost={nextPost} prevPost={prevPost} />
            }}
          />
          <Route
            path="/users/:id"
            exact
            render={(props) => {
              const userId = +props.match.params.id;
              const selectedUser = this.props.users.find((user) => user.id === userId);
              const nextUser = this.props.users.find((user) => user.id === userId + 1);
              const prevUser = this.props.users.find((user) => user.id === userId - 1);
              return <User selectedUser={selectedUser} nextUser={nextUser} prevUser={prevUser} />
            }}
          />
          <Route render={() => <h2> 404 Not Found</h2>} />
        </Switch>
        <Footer />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.modal,
  ...state.user,
  ...state.post
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(App);

export default Wrapped;