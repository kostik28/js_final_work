import * as types from '../constants/PostConstans'

const initialState = {
  posts: [],                              // список постов
  errorFetch: null,
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts,
        errorFetch: null,
      };

    case types.FETCH_POST_FAIL:
      return {
        ...state,
        posts: [],
        errorFetch
      };

    default:
      return state;
  }
};

export default post;