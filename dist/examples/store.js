'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = fetchUsers;

var _redux = require('redux');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Action functions
 */
function fetchUsers() {
  var page = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  return function (dispatch) {
    (0, _isomorphicFetch2.default)('data/page' + page + '.json').then(function (res) {
      return res.json();
    }).then(function (users) {
      dispatch({
        type: 'FETCH_USERS',
        users: users
      });
    });
  };
}

var defaultState = [];

/**
 * Reducer functions.
 */
function users() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'FETCH_USERS':
      return action.users;
    default:
      return state;
  }
}

var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore);

var store = finalCreateStore((0, _redux.combineReducers)({ users: users }), {});

exports.default = store;