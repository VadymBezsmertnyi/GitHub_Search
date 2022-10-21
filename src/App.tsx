import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { create } from 'jss';
import jssIncreaseSpecificity from 'jss-increase-specificity';

import { DetailsPage, FavoritesPage, HomePage } from 'pages';
import { Layout } from 'components';

import { createAppTheme } from 'theme/theme';

const App = () => {
  const theme = createAppTheme();
  const jss = create({
    plugins: [...jssPreset().plugins, jssIncreaseSpecificity()],
  });
  const generateClassName = createGenerateClassName({
    productionPrefix: 'fetss-',
    disableGlobal: false,
    seed: 'ss',
  });

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />

              <Route path="/details" element={<DetailsPage />} />
              <Route path="/details/:id" element={<DetailsPage />} />

              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
