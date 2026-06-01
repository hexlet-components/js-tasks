import { createStore } from 'redux';
import reducers from '../reducers';

test('Store initializes correctly', () => {
  const store = createStore(reducers);
  expect(store.getState()).toBeDefined();
});
