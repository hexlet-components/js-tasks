import React from 'react' // eslint-disable-line
import { render } from 'react-dom' // eslint-disable-line
import { Provider } from 'react-redux' // eslint-disable-line
import { createStore } from 'redux' // eslint-disable-line
import { BrowserRouter as Router } from 'react-router-dom'; // eslint-disable-line
import reducers from './reducers';
import App from './components/App.jsx';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  { tasks: { 1000: { id: 1000, state: 'active', text: 'my first task' } } },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// BEGIN
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
// END
