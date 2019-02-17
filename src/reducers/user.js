import * as types from "../constants/UserConstants";
import { CLICK_POST } from '../constants/PostConstants'

const initialState = {
  users: [],                              // список пользователей
  errorUserFetch: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      const { users } = action;
      return {
        ...state,
        users,
        errorUserFetch: null,
      };

    case types.FETCH_USERS_FAIL:
      return {
        ...state,
        users: [],
        errorUserFetch: action.error
      };

    case types.FETCH_USER_FAIL:
      return {
        ...state,
        errorUserFetch
      };

    default:
      return state;
  }
};

export default user;