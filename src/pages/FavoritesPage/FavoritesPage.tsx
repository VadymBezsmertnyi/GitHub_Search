import { Box, Typography } from '@mui/material';
import { Header, Result } from 'components';
import { useSelector } from 'react-redux';
import { IInitialState } from 'types/main';

import useStyles from './FavoritesPage.styles';

const FavoritesPage = () => {
  const { listUsersFavorite } = useSelector((state: IInitialState) => state);

  const classes = useStyles();

  return (
    <Box className={classes.favoritesPage}>
      <Header type="favorites" />
      <Box className={classes.resultFavorites}>
        {listUsersFavorite.length ? (
          <Result items={listUsersFavorite} />
        ) : (
          <Typography className={classes.textNotResult}>
            No favorite users...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FavoritesPage;
