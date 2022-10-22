import { DEFAULT_SELECT_USER } from 'constants/default';
import { render, screen } from 'testUtils/testUtils';

import IconFavorite from './IconFavorite';

describe('Test component: IconFavorite', () => {
  const startRenderComponent = (favorite: boolean) =>
    render(<IconFavorite favorite={favorite} type={'header'} />);
  it('Render component IconFavorite', () => {
    startRenderComponent(false);
    expect(
      screen.getByTestId(`test_component_icon_favorite`)
    ).toBeInTheDocument();
  });
  it('Render icon favorite true in component IconFavorite', () => {
    startRenderComponent(true);
    expect(
      screen.getByTestId(`test_icon_favorite_type_icon_${true}`)
    ).toBeInTheDocument();
  });
  it('Render icon favorite false in component IconFavorite', () => {
    startRenderComponent(false);
    expect(
      screen.getByTestId(`test_icon_favorite_type_icon_${false}`)
    ).toBeInTheDocument();
  });
});
