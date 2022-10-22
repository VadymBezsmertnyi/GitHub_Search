import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Divider, Typography } from '@mui/material';

import { IconFavorite } from 'components';
import { addFavorite, deleteFavorite, getFullInfoUser } from 'reducers/reducer';
import { AppDispatch } from 'store/store';
import { TUser } from 'types/main';

import useStyles from './ItemResult.styles';

interface IItemResultProps {
  favorite: boolean;
  user: TUser;
}

const ItemResult = ({ favorite, user }: IItemResultProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const classes = useStyles();

  const selectUser = () => {
    navigate(`/details/${user.id}`);
  };

  const selectFavorite = () => {
    console.log(user);
    if (favorite) dispatch(deleteFavorite({ idUser: user.id }));
    else dispatch(addFavorite({ idUser: user.id }));
  };

  useEffect(() => {
    if (user.bio === undefined) dispatch(getFullInfoUser({ user: user.login }));
  }, []);

  return (
    <Box className={classes.itemResultContainer}>
      <Box className={classes.mainItemResultContainer}>
        <Box
          onClick={selectUser}
          component={'img'}
          src={user.avatar_url}
          className={classes.avatarUser}
        />
        <Box onClick={selectUser} className={classes.textUserContainer}>
          <Typography
            className={classes.nameUser}
          >{`@${user.login}`}</Typography>
          <Typography className={classes.descriptionsUser}>
            {user.bio}
          </Typography>
        </Box>
        <IconFavorite
          favorite={favorite}
          type="result"
          clickFavorite={selectFavorite}
        />
      </Box>
      <Divider orientation="horizontal" className={classes.lineItemResult} />
    </Box>
  );
};

export default ItemResult;
