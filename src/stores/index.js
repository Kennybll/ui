import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory()

function reduxStore(initialState) {
  const store = createStore(reducers, initialState,
    window.devToolsExtension && window.devToolsExtension(), applyMiddleware(routerMiddleware(history)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return {store, history};
}

export default reduxStore;
