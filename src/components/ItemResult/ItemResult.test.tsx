import { DEFAULT_SELECT_USER } from 'constants/default';
import { render, screen } from 'testUtils/testUtils';

import ItemResult from './ItemResult';

describe('Test component: ItemResult', () => {
  const startRenderComponent = () =>
    render(
      <ItemResult
        user={DEFAULT_SELECT_USER}
        favorite={Boolean(DEFAULT_SELECT_USER.favorite)}
      />
    );
  it('Render component ItemResult', () => {
    startRenderComponent();
    expect(
      screen.getByTestId(`test_component_item_result`)
    ).toBeInTheDocument();
  });
  it('Render name user in component ItemResult', () => {
    startRenderComponent();
    expect(
      screen.getByTestId(`test_component_item_result_login`).textContent
    ).toBe(`@${DEFAULT_SELECT_USER.login}`);
  });
  it('Render login user in component ItemResult', () => {
    startRenderComponent();
    expect(
      screen.getByTestId(`test_component_item_result_description`).textContent
    ).toBe(DEFAULT_SELECT_USER.bio ? DEFAULT_SELECT_USER.bio : '');
  });
});
