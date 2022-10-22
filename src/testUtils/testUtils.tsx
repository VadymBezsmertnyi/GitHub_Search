import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { store } from 'store';
import { createAppTheme } from 'theme/theme';

const MuiThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const theme = createAppTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={1000} maxSnack={3}>
        <BrowserRouter>{ui}</BrowserRouter>
      </SnackbarProvider>
    </Provider>,
    {
      wrapper: MuiThemeProvider,
      ...options,
    }
  );

export * from '@testing-library/react';
export { customRender as render };
