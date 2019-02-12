import * as types from '../constants/UserConstans'

const initialState = {
  users: [],                              // список пользователей
  loggedUser: null,                       // залогинившийся пользователей
  errorFetch: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      const { users } = action;
      return {
        ...state,
        users,
        errorFetch: null,
      };

    case types.FETCH_USERS_FAIL:
      return {
        ...state,
        users: [],
        errorFetch: action.error
      };

    case types.FETCH_USER_SUCCESS:

      return {
        ...state,
        loggedUser,
        errorFetch: null,
      };

    case types.FETCH_USER_FAIL:
      return {
        ...state,
        loggedUser: null,
        errorFetch
      };

    default:
      return state;
  }
};

export default user;