import { render, screen } from 'testUtils/testUtils';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByTestId(`test_main_page`)).toBeInTheDocument();
});
