import * as types from '../constants/PostConstans'
import callApi from '../api/FetchApi'

export const onLoadPosts = () => async dispatch => {

  const result = await callApi('http://localhost:3003/posts');
  if(result.isError) {
    dispatch(fetchPostsFail(result.error));
  }else {
    dispatch(fetchPostsSuccess(result.data));
  }

};

const fetchPostsSuccess = posts => ({ type: types.FETCH_POST_SUCCESS, posts });

const fetchPostsFail = errorFetch => ({ type: types.FETCH_POST_FAIL, errorFetch });