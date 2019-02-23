import * as types from '../constants/LoginConstants'

const initialState = {
  loginInputValue: null,                  // введенный пользователем логин
  passwordInputValue: null,               // введенный пользователем пароль
  loggedUser: null,                       // залогинившийся пользователей
  messageToUser: null,                    // сообщение пользователю о првильности ввода логина и пароля при входе
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_INPUT_LOGIN_CHANGED:
      const { login } = action;
      return {
        ...state,
        loginInputValue: login.length > 0 ? login : ''
      };

    case types.USER_INPUT_PASSWORD_CHANGED:
      const { password } = action;
      return {
        ...state,
        passwordInputValue: password.length > 0 ? password : ''
      };

    case types.USER_LOGIN:
      const { loggedUser } = action;
      return {
        ...state,
        loggedUser
      };

    case types.USER_LOGIN_MASSAGE:
      const { messageToUser } = action;
      return {
        ...state,
        messageToUser
      };

    case types.USER_SIGN_OUT:
      const { loggedUser: logUser } = action;
      return {
        ...state,
        loggedUser: logUser
      };

    default:
      return state;
  }
};

export default login;