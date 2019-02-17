import * as types from '../constants/PostConstants'
import callApi from '../api/FetchApi'
import { searchUserById, onLoadUser } from '../actions/UserActions'

export const onLoadPosts = () => async dispatch => {

  const result = await callApi('http://localhost:3003/posts');
  if(result.isError) {
    dispatch(fetchPostsFail(result.error));
  }else {
    dispatch(fetchPostsSuccess(result.data));
  }

};

// export const onClickPost = idUser => (dispatch, getState) => {
//
//   const state = getState();
//   const users = state.user.users;
//   const searchUser = searchUserById(users, idUser);
//   if (searchUser === undefined) {
//     onLoadUser(idUser);
//   } else {
//     dispatch(onClickingPost(searchUser));
//   }
//
// };


const fetchPostsSuccess = posts => ({ type: types.FETCH_POST_SUCCESS, posts });

const fetchPostsFail = errorFetch => ({ type: types.FETCH_POST_FAIL, errorFetch });

// export const onClickingPost = userPost => ({ type: types.CLICK_POST, userPost });