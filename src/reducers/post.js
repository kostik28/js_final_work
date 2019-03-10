import * as types from "../constants/PostConstants";

const initialState = {
  posts: [],                              // список постов
  errorPostFetch: null,                   // ошибка загрузка постов
  selectedPost: null,                     // текущий пост
  titleInputValue: '',                    // заголовок поста
  textInputValue: '',                     // текст поста
  isModifiedForm: false                   // форма модифицированна (изменен заголовок или текст)
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_SUCCESS:
      const { posts } = action;
      return {
        ...state,
        posts,
        errorPostFetch: null,
      };

    case types.FETCH_POST_FAIL:
      return {
        ...state,
        posts: [],
        errorPostFetch
      };

    case types.SET_SELECTED_POST:
      const { selectedPost } = action;
      return {
        ...state,
        selectedPost
      };

    case types.USER_INPUT_TITLE_CHANGED:
      const { title } = action;
      return {
        ...state,
        titleInputValue: title.length > 0 ? title : '',
        isModifiedForm: true
      };

    case types.USER_INPUT_TEXT_CHANGED:
      const { text } = action;
      return {
        ...state,
        textInputValue: text.length > 0 ? text : '',
        isModifiedForm: true
      };

    case types.SET_MODIFIED_FORM:
      const { isModifiedForm } = action;
      return {
        ...state,
        isModifiedForm
      };

    default:
      return state;
  }
};

export default post;