import 'js-polyfills/html';

import React from 'react' // eslint-disable-line
import { Provider } from 'react-redux' // eslint-disable-line
import { createStore } from 'redux' // eslint-disable-line
import Enzyme, { mount, render } from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line
import reducers from '../reducers';
import App from '../components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('Store', () => {
  const store = createStore(reducers);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container'),
  );
  expect(render(wrapper)).toMatchSnapshot();

  const newTaskInput = wrapper.find('input[type="text"]');
  const newTaskSubmit = wrapper.find('button[type="submit"]');

  newTaskInput.simulate('change', { target: { value: 'na-na' } });
  expect(render(wrapper)).toMatchSnapshot();

  newTaskSubmit.simulate('submit');
  expect(render(wrapper)).toMatchSnapshot();

  newTaskInput.simulate('change', { target: { value: 'another task' } });
  expect(render(wrapper)).toMatchSnapshot();

  newTaskSubmit.simulate('submit');
  expect(render(wrapper)).toMatchSnapshot();
});
