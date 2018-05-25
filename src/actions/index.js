/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import logout from '../actions/logout.js';
import login from '../actions/login.js';
import token from '../actions/token.js';
const actions = {
  login,
  logout,
  token
};
module.exports = actions;
