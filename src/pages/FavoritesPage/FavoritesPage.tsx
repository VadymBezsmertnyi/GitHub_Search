import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { Header, Result } from 'components';
import { IInitialState } from 'types/main';

import useStyles from './FavoritesPage.styles';

const FavoritesPage = () => {
  const { listUsersFavorite } = useSelector((state: IInitialState) => state);

  const classes = useStyles();

  return (
    <Box data-testid={'test_favorites_page'} className={classes.favoritesPage}>
      <Header type="favorites" />
      <Box className={classes.resultFavorites}>
        {listUsersFavorite.length ? (
          <Result items={listUsersFavorite} />
        ) : (
          <Typography
            data-testid={'test_favorites_page_text'}
            className={classes.textNotResult}
          >
            No favorite users...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FavoritesPage;
