import {
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  SHOW_MODAL_FORM
} from '../constants'
import {USER_INPUT_LOGIN_CHANGED} from "../../../lesson/src/constants";

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

};

export default actions;