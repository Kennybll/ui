import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import Callback from './containers/Callback';
import Feed from './containers/Feed';
import Single from './containers/Single';
import configureStore from './stores';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { CookiesProvider } from 'react-cookie';
import './styles/base.less';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store.store}>
      <ConnectedRouter history={store.history}>
        <CookiesProvider>
          <div>
            <Route path="/" component={App}/>
            <Route exact path="/" component={Feed} />
            <Route exact path="/callback" component={Callback}/>
            <Route exact path="/@:author/:permlink" component={Single}/>
          </div>
        </CookiesProvider>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
          <Provider store={store.store}>
            <ConnectedRouter history={store.history}>
              <CookiesProvider>
                <div>
                  <Route path="/" component={App}/>
                  <Route exact path="/" component={Feed} />
                  <Route exact path="/callback" component={Callback}/>
                  <Route exact path="/@:author/:permlink" component={Single}/>
                </div>
              </CookiesProvider>
            </ConnectedRouter>
          </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
