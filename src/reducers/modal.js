import * as types from '../constants/ModalConstans'

const initialState = {
  messageToUser: null,                    // сообщение пользователю о првильности ввода логина и пароля при входе
  loginInputValue: null,                  // введенный пользователем логин
  passwordInputValue: null,               // введенный пользователем пароль
  nameModal: null,                        // имя модальной формы ('search', 'login', 'new post')
  isOpenedModalForm: false,               // признак, что модальная форма открыта
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL_FORM:
      const { nameForm } = action;
      return {
        ...state,
        isOpenedModal: true,
        nameModal: nameForm,
        messageToUser: null,
        loginInputValue: null,
        passwordInputValue: null
      };

    case types.CLOSE_MODAL_FORM:
      return {
        ...state,
        isOpenedModal: false,
        nameModal: null,
        messageToUser: null,
        loginInputValue: null,
        passwordInputValue: null
      };

    default:
      return state;
  }
};

export default modal;