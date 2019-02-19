import * as types from '../constants/ModalConstants'
import { onLoginUserMassage } from '../actions/LoginActions'
import { setSelectedPost } from '../actions/PostActions'

export const onOpenModal = (nameForm, post = null) => dispatch => {
  if (nameForm === 'new post' || nameForm === 'edit') {
    dispatch(setSelectedPost(post));
  }

  dispatch(onLoginUserMassage(null));
  dispatch({ type: types.SHOW_MODAL_FORM, nameForm });
};

export const onCloseModal = () => dispatch => {
  dispatch(onLoginUserMassage(null));
  dispatch({ type: types.CLOSE_MODAL_FORM })
};