import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Box, Typography } from '@mui/material';
import { BeatLoader } from 'react-spinners';

import { Header, Result } from 'components';
import { IInitialState } from 'types/main';

import useStyles from './HomePage.styles';
import { AppDispatch } from 'store/store';
import { getFullInfoUser } from 'reducers/reducer';
import { useEffect } from 'react';

const HomePage = () => {
  const { listUsers, listUsersFavorite, loading, error, message } = useSelector(
    (state: IInitialState) => state
  );
  const dispatch = useDispatch<AppDispatch>();
  const { enqueueSnackbar } = useSnackbar();
  const verifyDescription =
    listUsers.findIndex((user) => user.bio === undefined && !error) >= 0;
  const showResult = listUsers.map((user) => {
    const favoriteUser =
      listUsersFavorite.findIndex((favorite) => favorite.id === user.id) >= 0;
    return { ...user, favorite: favoriteUser };
  });

  const classes = useStyles();

  if (error && message) enqueueSnackbar(message, { variant: 'error' });

  useEffect(() => {
    if (verifyDescription) {
      listUsers.forEach((user) => {
        if (user.bio === undefined && !error)
          dispatch(getFullInfoUser({ user: user.login }));
      });
    }
  }, [verifyDescription]);

  return (
    <Box data-testid={'test_home_page'} className={classes.homePage}>
      <Header type="home" />
      <Box className={classes.resultHome}>
        {loading ? (
          <BeatLoader />
        ) : listUsers.length ? (
          <Result items={showResult} />
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
