import { render, screen } from 'testUtils/testUtils';

import FavoritesPage from './FavoritesPage';

describe('Test component: FavoritesPage', () => {
  const startRenderComponent = () => render(<FavoritesPage />);
  it('Render component FavoritesPage', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_favorites_page`)).toBeInTheDocument();
  });
  it('Render not text component FavoritesPage', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_favorites_page_text`).textContent).toBe(
      'No favorite users...'
    );
  });
});
