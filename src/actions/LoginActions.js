import * as types from '../constants/LoginConstans'
import { fetchUserFail } from '../actions/UserActions'
import { onCloseModal } from '../actions/ModalActions'
import callApi from "../api/FetchApi";

export const onChangedLogin = login => ({ type: types.USER_INPUT_LOGIN_CHANGED, login });

export const onChangedPassword = password => ({ type: types.USER_INPUT_PASSWORD_CHANGED, password });

export const onLogin = () => async (dispatch, getState) => {

  const state = getState();
  const login = state.login;
  const foundUser = state.user.users.find((user) => user.login === login.loginInputValue);

  if (foundUser !== undefined) {
    dispatch(checkCorrectPassword(foundUser, login));
  }else {
    const result = await callApi('http://localhost:3003/users?login=' + login.loginInputValue);
    if(result.isError) {
      dispatch(fetchUserFail(result.error));
    }else {
      const loggedUser = result.data.length === 0 ? null : result.data[0];
      if (loggedUser === null) {
        dispatch(onLoginUser({ loggedUser: null, messageToUser: 'The login is incorrect' }));
      }else {
        dispatch(checkCorrectPassword(loggedUser, login.passwordInputValue));
      }
    }
  }

};

const checkCorrectPassword = (user, password) => dispatch => {

  if(user.password === password) {
    dispatch(onLoginUser({ loggedUser: user, messageToUser: null }));
    dispatch(onCloseModal());
  }else {
    dispatch(onLoginUser({ loggedUser: null, messageToUser: 'The password is incorrect' }));
  }

};

const onLoginUser = payload => ({ type: types.USER_LOGIN, payload });