import {
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  SHOW_MODAL_FORM,
  CLOSE_MODAL_FORM,
  USER_INPUT_PASSWORD_CHANGED,
  USER_INPUT_LOGIN_CHANGED,
  GET_USER_FAIL,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  ON_LOGIN_ARRAY_SEARH
} from '../constants'

const actions = {

  getUsersList() {
    return (dispatch, getStore) => {
      dispatch({
        type: GET_USERS_LOADING
      });

      fetch('http://localhost:3003/users')
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: data,
        });
      })
      .catch(reason => {
        dispatch({
          type: GET_USERS_FAIL,
          error: reason.message
        });
      });
    };
  },

  getPostsList() {
    return (dispatch, getStore) => {
      dispatch({
        type: GET_POSTS_LOADING
      });

      fetch('http://localhost:3003/posts')
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: data,
        });
      })
      .catch(reason => {
        dispatch({
          type: GET_POSTS_FAIL,
          error: reason.message
        });
      });
    };
  },

  showModalForm(nameForm) {
    return {
      type: SHOW_MODAL_FORM,
      nameForm
    };
  },

  onCloseModalForm() {
    return {
      type: CLOSE_MODAL_FORM
    };
  },

  onLoginArraySearch(foundUser) {
    return {
      type: ON_LOGIN_ARRAY_SEARH,
      foundUser
    };
  },

  onLogin(login) {

      return (dispatch, getStore) => {
        dispatch({
          type: GET_USER_LOADING
        });
        fetch('http://localhost:3003/users?login=' + login)
        .then(resp => resp.json())
        .then(data => {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: data,
          });
        })
        .catch(reason => {
          dispatch({
            type: GET_USER_FAIL,
            error: reason.message
          });
        });
      };
  },

  saveLoginInputValue(login) {
    return {
      login,
      type: USER_INPUT_LOGIN_CHANGED
    };
  },

  savePasswordInputValue(password) {
    return {
      password,
      type: USER_INPUT_PASSWORD_CHANGED
    };
  },

};

export default actions;