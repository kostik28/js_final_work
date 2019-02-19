import * as types from "../constants/PostConstants";

const initialState = {
  posts: [],                              // список постов
  userPost: null,
  errorPostFetch: null,
  selectedPost: null
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

    default:
      return state;
  }
};

export default post;