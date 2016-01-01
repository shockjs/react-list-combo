import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

/**
 * Action functions
 */
export function fetchUsers(page=1) {
  return dispatch => {
    fetch(`data/page${page}.json`)
      .then(res => res.json())
      .then((users) => {
        dispatch({
          type: 'FETCH_USERS',
          users: users
        });
      });
  };
}

let defaultState = [];

/**
 * Reducer functions.
 */
function users(state = defaultState, action) {
  switch (action.type) {
  case 'FETCH_USERS':
    return action.users;
  default:
    return state;
  }
}

const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

let store = finalCreateStore(combineReducers({users: users}), {});

export default store;