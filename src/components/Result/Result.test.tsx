import { DEFAULT_SELECT_USER } from 'constants/default';
import { render, screen } from 'testUtils/testUtils';

import Result from './Result';

describe('Test component: Result', () => {
  const startRenderComponent = () =>
    render(<Result items={[DEFAULT_SELECT_USER]} />);
  it('Render component Result', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_component_result`)).toBeInTheDocument();
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
