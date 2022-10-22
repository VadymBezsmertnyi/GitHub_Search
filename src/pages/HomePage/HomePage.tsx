import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Box, Typography } from '@mui/material';
import { BeatLoader } from 'react-spinners';

import { Header, Result } from 'components';
import { IInitialState } from 'types/main';

import useStyles from './HomePage.styles';
import { useEffect } from 'react';

const HomePage = () => {
  const { listUsers, listUsersFavorite, loading, error, message } = useSelector(
    (state: IInitialState) => state
  );
  const { enqueueSnackbar } = useSnackbar();
  const showResult = listUsers
    .map((user) => {
      const favoriteUser =
        listUsersFavorite.findIndex((favorite) => favorite.id === user.id) >= 0;
      return { ...user, favorite: favoriteUser };
    })
    .slice(0, 5);

  const classes = useStyles();

  if (error && message) enqueueSnackbar(message, { variant: 'error' });

  return (
    <Box data-testid={'test_home_page'} className={classes.homePage}>
      <Header type="home" />
      <Box className={classes.resultHome}>
        {loading ? (
          <BeatLoader />
        ) : listUsers.length ? (
          <Result items={showResult} errorServer={error} />
        ) : (
          <Typography
            data-testid={'test_home_page_text'}
            className={classes.textNotResult}
          >
            No search results...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
