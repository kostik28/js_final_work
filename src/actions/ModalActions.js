import * as types from '../constants/ModalConstants'
import { onLoginUserMassage } from '../actions/LoginActions'

export const onOpenModal = nameForm => dispatch => {
  dispatch(onLoginUserMassage(null));
  dispatch({ type: types.SHOW_MODAL_FORM, nameForm });
};

export const onCloseModal = () => dispatch => {
  dispatch(onLoginUserMassage(null));
  dispatch({ type: types.CLOSE_MODAL_FORM })
};