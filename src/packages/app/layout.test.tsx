import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { Layout } from './layout';
import { ROUTES } from './routes';

describe('Layout', () => {
  describe('Navigation menu', () => {
    it('renders the right number of links', () => {
      const wrapper = shallow(
        <Layout>
          <>Content</>
        </Layout>,
      );

      expect(wrapper.find(Link)).toHaveLength(ROUTES.length);
    });
  });

  describe('Main content', () => {
    it('renders the main content passed in as children', () => {
      const wrapper = shallow(
        <Layout>
          <div data-testid="layout-test-content">Content</div>
        </Layout>,
      );

      expect(wrapper.find('[data-testid="layout-test-content"]').exists()).toBe(true);
    });
  });
});
