import * as types from '../constants/UserConstans'
import callApi from '../api/FetchApi'

export const onLoadUsers = () => async dispatch => {

  const result = await callApi('http://localhost:3003/users');
  if(result.isError) {
    dispatch(fetchUsersFail(result.error));
  }else {
    dispatch(fetchUsersSuccess(result.data));
  }

};

const fetchUsersSuccess = users => ({ type: types.FETCH_USERS_SUCCESS, users });

const fetchUsersFail = errorFetch => ({ type: types.FETCH_USERS_FAIL, errorFetch });


export const onLoadUser = login => async dispatch => {

  const result = await callApi('http://localhost:3003/users?login=' + login);
  if(result.isError) {
    dispatch(fetchUserFail(result.error));
  }else {
    const loggedUser = result.data.length === 0 ? null : result.data[0];
    dispatch(fetchUserSuccess(loggedUser));
  }

};

const fetchUserSuccess = loggedUser => ({ type: types.FETCH_USER_SUCCESS, loggedUser });

const fetchUserFail = errorFetch => ({ type: types.FETCH_USER_FAIL, errorFetch });