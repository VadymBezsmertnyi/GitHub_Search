import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { verifyFavoriteUsers } from 'hooks/localStorage';
import { IInitialState } from 'types/main';
import { addFavoriteUsersThisLocalStorage } from 'reducers/reducer';

import useStyles from './Layout.styles';

const Layout = () => {
  const { listUsersFavorite } = useSelector((state: IInitialState) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (verifyFavoriteUsers() && !listUsersFavorite.length) {
      dispatch(addFavoriteUsersThisLocalStorage());
    }
  }, []);

  return (
    <Box className={classes.layoutContainer}>
      <Outlet />
    </Box>
  );
};

export default Layout;
