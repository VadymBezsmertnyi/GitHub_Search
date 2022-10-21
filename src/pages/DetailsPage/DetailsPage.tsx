import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Header, IconFavorite } from 'components';
import { avatarFullImg } from 'images';

import { IInitialState } from 'types/main';
import useStyles from './DetailsPage.styles';
import { useEffect } from 'react';

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectUser = useSelector((state: IInitialState) =>
    state.listUsers.find((user) => user.id === Number(id))
  );
  const listUsersFavorite = useSelector(
    (state: IInitialState) => state.listUsersFavorite
  );
  const verifyFavorite =
    listUsersFavorite.findIndex(
      (userFavorite) => userFavorite.id === selectUser?.id
    ) >= 0;
  const classes = useStyles();

  useEffect(() => {
    if (!selectUser) navigate('/');
  });

  return (
    <Box className={classes.detailsPage}>
      <Header type="details" />
      <Box className={classes.resultDetails}>
        <Box className={classes.detailsUser}>
          <Box
            component={'img'}
            src={selectUser?.avatar_url}
            className={classes.avatarDetails}
          />
          <Box className={classes.detailsInfoUser}>
            <Typography className={classes.fullNameUser}>
              {selectUser?.name}
            </Typography>
            <Typography
              className={classes.nameUser}
            >{`@${selectUser?.login}`}</Typography>
            <Typography className={classes.descriptionsUser}>
              {selectUser?.bio}
            </Typography>
            <Box className={classes.infoUser}>
              <Box className={classes.gitInfoUser}>
                <Typography className={classes.numberGitInfoUser}>
                  {selectUser?.followers}
                </Typography>
                <Typography className={classes.textGitInfoUser}>
                  Followers
                </Typography>
              </Box>
              <Box style={{ margin: '0 28px' }} className={classes.gitInfoUser}>
                <Typography className={classes.numberGitInfoUser}>
                  {selectUser?.following}
                </Typography>
                <Typography className={classes.textGitInfoUser}>
                  FOLLOWING
                </Typography>
              </Box>
              <Box className={classes.gitInfoUser}>
                <Typography className={classes.numberGitInfoUser}>
                  {selectUser?.public_repos}
                </Typography>
                <Typography className={classes.textGitInfoUser}>
                  Repos
                </Typography>
              </Box>
            </Box>
          </Box>
          <IconFavorite favorite={verifyFavorite} type={'details'} />
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsPage;
