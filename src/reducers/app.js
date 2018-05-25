import {
  LOGIN,
  LOGOUT,
  TOKEN
} from '../actions/const';

const initialState = {
  username: '',
  isMod: false,
  isLogged: false,
  user: {},
  token: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        username: action.payload.username,
        isMod: action.payload.isMod,
        isLogged: action.payload.isLogged,
        user: action.payload.user
      }
    }
    case TOKEN: {
      return {
        ...state,
        token: action.payload.token
      }
    }
    case LOGOUT: {
      return initialState
    }
    default: {
      return state;
    }
  }
}

module.exports = reducer;
