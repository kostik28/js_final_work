import * as types from '../constants/PostConstants'
import callApi from '../api/FetchApi'
import { onLoginUserMassage } from '../actions/LoginActions'

// при изменении заголовка поста
export const onChangedTitle = title => ({ type: types.USER_INPUT_TITLE_CHANGED, title });

// при изменении текста поста
export const onChangedText = text => ({ type: types.USER_INPUT_TEXT_CHANGED, text });

// установка/снятие модифицированности формы поста
export const setModifiedForm = isModifiedForm => ({ type: types.SET_MODIFIED_FORM, isModifiedForm });

// загрузка постов
export const onLoadPosts = () => async (dispatch, setState) => {
  const result = await callApi('http://localhost:3003/posts');

  if (result.isError) {
    dispatch({ type: types.FETCH_POST_FAIL, errorFetch: result.error });
  } else {
    const state = setState();
    const arr = [...state.post.posts];

    for (let i = 0; result.data.length > i; i++) {
      if (arr.find(post => post.id === result.data[i].id) === undefined) {
        arr.push(result.data[i]);
      }
    }

    arr.sort(sortById);
    dispatch({ type: types.FETCH_POST_SUCCESS, posts: arr });
  }
};

// фиксирование постов в массиве постов
export const setPosts = post => (dispatch, setState) => {
  const state = setState();
  const posts = state.post.posts;
  const arr = posts.filter(item => item.id !== post.id);
  arr.push(post);

  arr.sort(sortById);
  dispatch({ type: types.FETCH_POST_SUCCESS, posts: arr });
};

// сохранение поста (либо нового, либо измененного)
export const savePost = () => (dispatch, getState) => {
  const state = getState();
  const title = state.post.titleInputValue;
  const body = state.post.textInputValue;

  if (title === '' && body === '') {
    dispatch(onLoginUserMassage('Fields "text" and "title" are not filled'))
  } else if (title === '') {
    dispatch(onLoginUserMassage('The field "text" is not filled'))
  } else if (body === '') {
    dispatch(onLoginUserMassage('The field "title" is not filled'))
  } else {

    let selectedPost = {};
    if (state.modal.nameModal === 'new post') {
      selectedPost = createNewPost({...state});
      console.log(selectedPost);
    } else {
      selectedPost = {
        ...state.post.selectedPost,
        title,
        body
      };
    }

    dispatch(setSelectedPost(selectedPost));
    dispatch(setPosts(selectedPost));
    dispatch(setModifiedForm(false));
  }
};

// установка текущего поста, т.е поста который просматривает пользователь
export const setSelectedPost = selectedPost => ({ type: types.SET_SELECTED_POST, selectedPost });

// сортировка массива постов
const sortById = (obj_1, obj_2) => {
  if (obj_1.id < obj_2.id) return 1;
  if (obj_1.id > obj_2.id) return -1;
};

// создание нового поста
const createNewPost = (state) => {
  console.log(state);
  return {
    idUser: state.login.loggedUser.id,
    id: state.post.posts.length + 1,
    title: state.post.titleInputValue,
    body: state.post.textInputValue,
    image: 'https://i.ytimg.com/vi/HYb5TDsAoGw/maxresdefault.jpg',
    images: [],
    likes: [],
    newPost: true
  }
};