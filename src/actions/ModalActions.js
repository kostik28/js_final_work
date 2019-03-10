import * as types from '../constants/ModalConstants'
import {onLoginUserMassage} from '../actions/LoginActions'
import {
  setSelectedPost,
  onChangedText,
  onChangedTitle,
  setModifiedForm,
  savePost,
} from '../actions/PostActions'

// открытие модальной формы
export const onOpenModal = (nameForm, post = null) => dispatch => {
  if (nameForm === 'new post' || nameForm === 'edit') {
    if (post !== null) {
      dispatch(setSelectedPost(post));
      dispatch(onChangedTitle(post.title));
      dispatch(onChangedText(post.body));
    }
    dispatch(setModifiedForm(false));
  }

  dispatch(onLoginUserMassage(null));
  dispatch({type: types.SHOW_MODAL_FORM, nameForm});
};

// закрытие модальной формы
export const onCloseModal = () => (dispatch, setState) => {
  const state = setState();

  if (state.post.isModifiedForm) {
    dispatch(onShowQuestionForm(true));
  } else {
    dispatch(onLoginUserMassage(null));

    if (state.modal.nameModal === 'post' || state.modal.nameModal === 'new post') {
      dispatch(onChangedTitle(''));
      dispatch(onChangedText(''));
    }

    dispatch({type: types.CLOSE_MODAL_FORM})
  }
};

// при сохранении поста из формы "Question"
export const onSaveQuestionForm = () => (dispatch, setState) => {
  dispatch(onShowQuestionForm(false));
  dispatch(savePost());

  const state = setState();
  if (!state.post.isModifiedForm) {
    dispatch(onCloseModal());
  }
};

// при закрытии поста из формы "Question"
export const onCloseQuestionForm = () => dispatch => {
  dispatch(onShowQuestionForm(false));
  dispatch(setModifiedForm(false));
  dispatch(onCloseModal());
};

// при показе формы "Question"
export const onShowQuestionForm = showQuestion => ({ type: types.SHOW_MODAL_QUESTION, showQuestion });
