// This file will be automatically executed before running all unit tests.
// This is useful in case the app uses a browser API that needs to be mocked or as a global setup before running any tests.
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/mocked/path',
  }),
  useNavigate: () => jest.fn(),
}));
