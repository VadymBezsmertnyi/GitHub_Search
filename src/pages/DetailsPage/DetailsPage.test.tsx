import { DEFAULT_SELECT_USER } from 'constants/default';
import { render, screen } from 'testUtils/testUtils';

import DetailsPage from './DetailsPage';

describe('Test component: DetailsPage', () => {
  const startRenderComponent = () =>
    render(<DetailsPage userTest={DEFAULT_SELECT_USER} />);
  it('Render component DetailsPage', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_details_page`)).toBeInTheDocument();
  });
  it('Render name user in component DetailsPage', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_details_page_name_user`).textContent).toBe(
      DEFAULT_SELECT_USER.name
    );
  });
  it('Render login user in component DetailsPage', () => {
    startRenderComponent();
    expect(screen.getByTestId(`test_details_page_login_user`).textContent).toBe(
      `@${DEFAULT_SELECT_USER.login}`
    );
  });
  it('Size followers user  in component DetailsPage', () => {
    startRenderComponent();
    expect(
      screen.getByTestId(`test_details_page_followers_user`).textContent
    ).toBe(String(DEFAULT_SELECT_USER.followers));
  });
  it('Size following user  in component DetailsPage', () => {
    startRenderComponent();
    expect(
      screen.getByTestId(`test_details_page_following_user`).textContent
    ).toBe(String(DEFAULT_SELECT_USER.following));
  });
  it('Size public repos user  in component DetailsPage', () => {
    startRenderComponent();
    expect(
      screen.getByTestId(`test_details_page_public_repos_user`).textContent
    ).toBe(String(DEFAULT_SELECT_USER.public_repos));
  });
});
