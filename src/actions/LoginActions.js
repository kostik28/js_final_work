import * as types from '../constants/LoginConstants'
import { onCloseModal } from '../actions/ModalActions'
import { searchUserByLogin } from '../actions/UserActions'

export const onChangedLogin = login => ({ type: types.USER_INPUT_LOGIN_CHANGED, login });

export const onChangedPassword = password => ({ type: types.USER_INPUT_PASSWORD_CHANGED, password });

export const onLogin = () => async (dispatch, getState) => {

  const state = getState();
  const login = state.login;
  const searchUser = searchUserByLogin(state.user.users, login.loginInputValue);

  if (searchUser !== undefined) {
    dispatch(checkCorrectPassword(searchUser, login.passwordInputValue));
  } else {
    dispatch(onLoginUser(null));
    dispatch(onLoginUserMassage('The login is incorrect'));
  }
};

export const signOutUser = () => dispatch => {
  dispatch({ type: types.USER_SIGN_OUT, loggedUser: null });
  dispatch(onChangedLogin(''));
  dispatch(onChangedPassword(''))
};

const checkCorrectPassword = (user, password) => dispatch => {

  if(user.password === password) {
    dispatch(onLoginUser(user));
    dispatch(onLoginUserMassage(null));
    dispatch(onCloseModal());
  }else {
    console.log('searchUser');
    dispatch(onLoginUser(null));
    dispatch(onLoginUserMassage('The password is incorrect'));
  }

};

const onLoginUser = loggedUser => ({ type: types.USER_LOGIN, loggedUser });

export const onLoginUserMassage = messageToUser => ({ type: types.USER_LOGIN_MASSAGE, messageToUser });