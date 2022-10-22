import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { verifyFavoriteUsers, verifyUsers } from 'hooks/localStorage';
import { IInitialState } from 'types/main';
import {
  addFavoriteUsersThisLocalStorage,
  addUsersThisLocalStorage,
} from 'reducers/reducer';

import useStyles from './Layout.styles';

const Layout = () => {
  const { listUsers, listUsersFavorite } = useSelector(
    (state: IInitialState) => state
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (verifyFavoriteUsers() && !listUsersFavorite.length)
      dispatch(addFavoriteUsersThisLocalStorage());

    if (verifyUsers() && !listUsers.length)
      dispatch(addUsersThisLocalStorage());
  }, []);

  return (
      <Box className={classes.layoutContainer}>
        <Outlet />
      </Box>
  );
};

export default Layout;
