import { render, screen, fireEvent } from 'testUtils/testUtils';

import Header, { IHeaderProps } from './Header';

describe('Test component: Header', () => {
  const startRenderComponent = ({ type, name }: IHeaderProps) =>
    render(<Header type={type} name={name} />);
  it('Render component Header & type = home', () => {
    startRenderComponent({ type: 'home' });
    expect(screen.getByTestId(`test_component_header`)).toBeInTheDocument();
    expect(
      screen.getByTestId(`test_component_header_home_icon`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`test_component_header_home_input`)
    ).toBeInTheDocument();
  });
  it('Test enter text in input & type = home', () => {
    startRenderComponent({ type: 'home' });
    const input: HTMLInputElement = screen.getByPlaceholderText(
      'Search for GitHub users...'
    );
    fireEvent.change(input, { target: { value: 'VadymBezsmertnyi' } });
    expect(input.value).toBe('VadymBezsmertnyi');
  });
  it('Render component Header & type = favorites', () => {
    startRenderComponent({ type: 'favorites' });
    expect(screen.getByTestId(`test_component_header`)).toBeInTheDocument();
    expect(
      screen.getByTestId(`test_component_header_favorites_title`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`test_component_header_not_home_icon`)
    ).toBeInTheDocument();
  });
  it('Render component Header & type = details', () => {
    startRenderComponent({ type: 'details' });
    expect(screen.getByTestId(`test_component_header`)).toBeInTheDocument();
    expect(
      screen.getByTestId(`test_component_header_not_home_icon`)
    ).toBeInTheDocument();
  });
});
