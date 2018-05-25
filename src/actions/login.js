import { LOGIN } from './const';

function action(payload) {
  return { type: LOGIN, payload };
}

module.exports = action;
