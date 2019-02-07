import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  SHOW_MODAL_FORM,
  USER_LOGGED_IN,
  USER_INPUT_LOGIN_CHANGED,
  USER_INPUT_PASSWORD_CHANGED
} from '../constants';

export const initialState = {
  users: [],
  posts: [],
  loggedUser: {},
  loginInputValue: null,
  passwordInputValue: null,
  isShowedButtonNewPost: false,
  isShowedButtonEditPost: false,
  isShowedButtonLikePost: false,
  isOpenedModalForm: false,
  isSavedDataForm: false,
  nameModalForm: null,
  error: null,
  isUsersLoading: false,
  isPostsLoading: false,
  pages: [
    {pageId: 0, name: 'login',  path: '',       modal: 'login'},
    {pageId: 1, name: 'users',  path: '/users', modal: ''},
    {pageId: 2, name: 'logo',   path: '/posts', modal: ''},
    {pageId: 3, name: 'posts',  path: '/posts', modal: ''},
    {pageId: 4, name: 'search', path: '',       modal: 'search'}
  ]
};

const users = (state = initialState, action) =>{
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        isUsersLoading: true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isUsersLoading: false,
        error: null,
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        users: [],
        isUsersLoading: false,
        error: action.error
      };

    case GET_POSTS_LOADING:
      return {
        ...state,
        isPostsLoading: true
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isPostsLoading: false,
        error: null,
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        posts: [],
        isPostsLoading: false,
        error: action.error
      };

    case SHOW_MODAL_FORM:
      const { nameForm } = action;
      return {
        ...state,
        isOpenedModalForm: true,
        nameModalForm: nameForm
      };

    case USER_LOGGED_IN:
      return {
        ...state
      };

    case USER_INPUT_LOGIN_CHANGED:
      const { login } = action;
      return {
        ...state,
        loginInputValue: login.length > 0 ? login : ''
      };

    case USER_INPUT_PASSWORD_CHANGED:
      const { password } = action;
      return {
        ...state,
        passwordInputValue: password.length > 0 ? password : ''
      };

    default:
      return state;
  }
};

export default history => combineReducers({
  router: connectRouter(history),
  user: users,
});

