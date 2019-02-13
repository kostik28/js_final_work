import * as types from '../constants/ModalConstans'

const initialState = {
  nameModal: null,                        // имя модальной формы ('search', 'login', 'new post')
  isOpenedModal: false,                   // признак, что модальная форма открыта
  pages: [
    {pageId: 0, name: 'login',  path: '',       modal: 'login'},
    {pageId: 1, name: 'users',  path: '/users', modal: ''},
    {pageId: 2, name: 'logo',   path: '/posts', modal: ''},
    {pageId: 3, name: 'posts',  path: '/posts', modal: ''},
    {pageId: 4, name: 'search', path: '',       modal: 'search'}
  ]
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