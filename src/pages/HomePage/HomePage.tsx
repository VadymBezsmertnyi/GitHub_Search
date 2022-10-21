import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { Header, Result } from 'components';
import { IInitialState } from 'types/main';

import useStyles from './HomePage.styles';

const HomePage = () => {
  const { listUsers, listUsersFavorite } = useSelector(
    (state: IInitialState) => state
  );
  const showResult = listUsers
    .map((user) => {
      const favoriteUser =
        listUsersFavorite.findIndex((favorite) => favorite.id === user.id) >= 0;
      return { ...user, favorite: favoriteUser };
    })
    .slice(0, 10);

  const classes = useStyles();

  return (
    <Box className={classes.homePage}>
      <Header type="home" />
      <Box className={classes.resultHome}>
        {listUsers.length ? (
          <Result items={showResult} />
        ) : (
          <Typography className={classes.textNotResult}>
            No search results...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
