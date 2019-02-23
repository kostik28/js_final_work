import * as types from '../constants/UserConstants'
import { onClickingPost } from '../actions/PostActions'

import callApi from '../api/FetchApi'

// загрузка пользователей
export const onLoadUsers = () => async dispatch => {
  const result = await callApi('http://localhost:3003/users');
  if(result.isError) {
    dispatch({ type: types.FETCH_USERS_FAIL, errorFetch: result.error });
  }else {
    dispatch({ type: types.FETCH_USERS_SUCCESS, users: result.data });
  }
};

// поиск пользователя в массиве пользователей по логину
export const searchUserByLogin = (users, login) => users.find((user) => user.login === login);

// поиск пользователя в массиве пользователей по ид
export const searchUserById = (users, id) => users.find((user) => user.id === id);

