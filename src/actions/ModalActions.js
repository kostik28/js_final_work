import * as types from '../constants/ModalConstans'

export const onOpenModal = nameForm => ({ type: types.SHOW_MODAL_FORM, nameForm });

export const onCloseModal = () => ({ type: types.CLOSE_MODAL_FORM });