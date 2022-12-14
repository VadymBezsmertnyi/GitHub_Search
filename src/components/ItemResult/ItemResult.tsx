import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Typography } from '@mui/material';

import { IconFavorite } from 'components';
import { addFavorite, deleteFavorite, getFullInfoUser } from 'reducers/reducer';
import { AppDispatch } from 'store/store';
import { IInitialState, TUser } from 'types/main';

import useStyles from './ItemResult.styles';
import { useEffect } from 'react';

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
    if (favorite) dispatch(deleteFavorite({ idUser: user.id }));
    else dispatch(addFavorite({ idUser: user.id }));
  };

  return (
    <Box
      data-testid={'test_component_item_result'}
      className={classes.itemResultContainer}
    >
      <Box className={classes.mainItemResultContainer}>
        <Box
          onClick={selectUser}
          component={'img'}
          src={user.avatar_url}
          className={classes.avatarUser}
        />
        <Box onClick={selectUser} className={classes.textUserContainer}>
          <Typography
            data-testid={'test_component_item_result_login'}
            className={classes.nameUser}
          >{`@${user.login}`}</Typography>
          <Typography
            data-testid={'test_component_item_result_description'}
            className={classes.descriptionsUser}
          >
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
