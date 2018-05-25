import { TOKEN } from './const';

function action(payload) {
  return { type: TOKEN, payload };
}

module.exports = action;
