import * as types from '../constants/LoginConstants'
import { onCloseModal } from '../actions/ModalActions'
import { searchUserByLogin } from '../actions/UserActions'

// при вводе логина
export const onChangedLogin = login => ({ type: types.USER_INPUT_LOGIN_CHANGED, login });

// при вводе пароля
export const onChangedPassword = password => ({ type: types.USER_INPUT_PASSWORD_CHANGED, password });

// авторизация пользователя на сайте
// 1. Ищем пользователя по логину
//   1.1 Логин найден -> Проверяем пароль
//     1.1.1 Пароль верный - Пользователь авторизовался
//     1.1.2 Пароль не верный - Сообщение об ошибке
//   1.2 Логин не найден -> Сообщение об ошибке
export const onLogin = () => async (dispatch, getState) => {
  const state = getState();
  const login = state.login;
  const searchUser = searchUserByLogin(state.user.users, login.loginInputValue);

  if (searchUser !== undefined) {
    dispatch(checkCorrectPassword(searchUser, login.passwordInputValue));
  } else {
    dispatch({ type: types.USER_LOGIN, loggedUser: null });
    dispatch(onLoginUserMassage('The login is incorrect'));
  }
};

// выход пользователя
export const signOutUser = () => dispatch => {
  dispatch({ type: types.USER_SIGN_OUT, loggedUser: null });
  dispatch(onChangedLogin(''));
  dispatch(onChangedPassword(''))
};

// проверка правильности пароля пользователя
const checkCorrectPassword = (user, password) => dispatch => {
  if(user.password === password) {
    dispatch({ type: types.USER_LOGIN, loggedUser:user });
    dispatch(onLoginUserMassage(null));
    dispatch(onCloseModal());
  }else {
    console.log('searchUser');
    dispatch({ type: types.USER_LOGIN, loggedUser:null });
    dispatch(onLoginUserMassage('The password is incorrect'));
  }
};

// сообщение пользователю об ошибке авторизации
export const onLoginUserMassage = messageToUser => ({ type: types.USER_LOGIN_MASSAGE, messageToUser });