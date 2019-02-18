import * as types from "../constants/PostConstants";

const initialState = {
  posts: [],                              // список постов
  userPost: null,
  errorPostFetch: null,
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

    default:
      return state;
  }
};

export default post;