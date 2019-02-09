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
  USER_INPUT_LOGIN_CHANGED,
  USER_INPUT_PASSWORD_CHANGED,
  ON_LOGIN_ARRAY_SEARH,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_LOADING
} from '../constants';

export const initialState = {
  users: [],
  posts: [],
  loggedUser: null,
  messageToUser: null,
  loginInputValue: null,
  passwordInputValue: null,
  isShowedButtonNewPost: false,
  isShowedButtonEditPost: false,
  isShowedButtonLikePost: false,
  isOpenedModalForm: false,
  isSavedDataForm: false,
  nameModalForm: null,
  error: null,
  isUserLoading: false,
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
        nameModalForm: nameForm,
        messageToUser: null,
        loginInputValue: null,
        passwordInputValue: null
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

    case ON_LOGIN_ARRAY_SEARH:
      return {
        ...state,
        loggedUser: foundUser.password === state.passwordInputValue ? foundUser : null,
        messageToUser: foundUser.password === state.passwordInputValue ? null : 'The password is incorrect'
      };

      case GET_USER_LOADING:
      return {
        ...state,
        isUserLoading: true
      };

    case GET_USER_SUCCESS:
      let messageToUser = null;
      let loggedUser = action.payload.length === 0 ? null : action.payload[0];
      if (loggedUser === null) {
        messageToUser = 'The login is incorrect'
      }else{
        if (loggedUser.password !== state.passwordInputValue) {
          messageToUser = 'The password is incorrect';
          loggedUser = null
        }
      }
      return {
        ...state,
        loggedUser,
        messageToUser,
        isUserLoading: false,
        error: null,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loddedUser: null,
        isUserLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default history => combineReducers({
  router: connectRouter(history),
  user: users,
});

