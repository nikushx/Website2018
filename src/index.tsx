import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppComponent from './components/App';
import store from './store';
import './styles/index.css';

function renderApp(App: any) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}

renderApp(AppComponent);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(NextApp);
  });
}
