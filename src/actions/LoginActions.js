import * as types from '../constants/LoginConstans'
import { onLoadUser } from '../actions/UserActions'

export const onChangedLogin = login => ({ type: types.USER_INPUT_LOGIN_CHANGED, login });

export const onChangedPassword = password => ({ type: types.USER_INPUT_PASSWORD_CHANGED, password });

export const onLogin = () => (dispatch, getStore) => {

  const users = getStore.users;
  const login = getStore.loginInputValue;
  const foundUser = users.find((user) => user.login === login);

  if (foundUser !== undefined) {
    checkCorrectPassword(foundUser, dispatch);
  }else {
    onLoadUser(login);
    const loggedUser = getStore.loggedUser;
    if (loggedUser === null) {
      dispatch(onLoginUser({ loggedUser: null, messageToUser: 'The login is incorrect' }));
    }else {
      checkCorrectPassword(loggedUser, dispatch);
    }
  }

};

const checkCorrectPassword = (user, dispatch)=> {

  const password = getStore.passwordInputValue;
  if(user.password !== password) {
    dispatch(onLoginUser({ loggedUser: user, messageToUser: null }));
  }else {
    dispatch(onLoginUser({ loggedUser: null, messageToUser: 'The password is incorrect' }));
  }

};

const onLoginUser = payload => ({ type: types.USER_LOGIN, payload });