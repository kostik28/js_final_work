import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import post from '../reducers/post'
import user from '../reducers/user'
import modal from '../reducers/modal'
import login from '../reducers/login'

export default history => combineReducers({
  router: connectRouter(history),
  user,
  modal,
  post,
  login
});