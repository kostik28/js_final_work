import * as types from '../constants/PostConstants'
import callApi from '../api/FetchApi'
import {onLoadUser} from '../actions/UserActions'

export const onLoadPosts = () => async (dispatch, setState) => {

  const result = await callApi('http://localhost:3003/posts');
  if(result.isError) {
    dispatch(fetchPostsFail(result.error));
  }else {
    const state = setState();
    const arr = [...state.post.posts];
    for (let i = 0; result.data.length > i; i++) {
      if(arr.find(post => post.id === result.data[i].id) === undefined){
        arr.push(result.data[i]);
      }
    }

    arr.sort(sortById);
    dispatch(fetchPostsSuccess(arr));
  }

};

export const setPosts = post => (dispatch, setState) => {
  const state = setState();
  const posts = state.post.posts;
  const arr = posts.filter(item => item.id !== post.id);
  arr.push(post);

  arr.sort(sortById);
  dispatch(fetchPostsSuccess(arr));
};

const fetchPostsSuccess = posts => ({ type: types.FETCH_POST_SUCCESS, posts });

const fetchPostsFail = errorFetch => ({ type: types.FETCH_POST_FAIL, errorFetch });

export const setSelectedPost = selectedPost => ({ type: types.SET_SELECTED_POST, selectedPost });

const sortById = (obj_1, obj_2) => {
  if (obj_1.id > obj_2.id) return 1;
  if (obj_1.id < obj_2.id) return -1;
};