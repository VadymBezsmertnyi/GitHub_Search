import { render, screen } from 'testUtils/testUtils';

import HomePage from './HomePage';

describe('Test component: HomePage', () => {
  const startRenderComponent = () => render(<HomePage />);
  it('Render component HomePage', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_home_page`)).toBeInTheDocument();
  });
  it('Render not text component HomePage', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_home_page_text`).textContent).toBe(
      'No search results...'
    );
  });
});
