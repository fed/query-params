import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from './app';
import { Layout } from './layout';
import { QueryParams } from './query-params';
import { ROUTES } from './routes';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    render(<App />, div);
    unmountComponentAtNode(div);
  });

  it('renders the BrowserRouter component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(BrowserRouter).exists()).toBe(true);
  });

  it('renders the QueryParams component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(QueryParams).exists()).toBe(true);
  });

  it('renders the Layout component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Layout).exists()).toBe(true);
  });

  it('renders the right number of routes', () => {
    const wrapper = shallow(<App />);

    // There's an extra route for the default one
    expect(wrapper.find(Layout).find(Routes).find(Route)).toHaveLength(ROUTES.length + 1);
  });

  it('renders the right default route', () => {
    const wrapper = shallow(<App />);
    const defaultRoute = wrapper
      .find(Routes)
      .find(Route)
      .findWhere((route) => route.prop('path') === '/');

    expect(defaultRoute.prop('element').props.to).toBe('flights');
  });
});
