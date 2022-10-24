import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { Header, IconFavorite } from 'components';
import { IInitialState, TUser } from 'types/main';
import { getFullInfoUser } from 'reducers/reducer';
import { AppDispatch } from 'store/store';

import useStyles from './DetailsPage.styles';

interface IDetailsPageProps {
  userTest?: TUser;
}

const DetailsPage = ({ userTest }: IDetailsPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { listUsers, listUsersFavorite, error } = useSelector(
    (state: IInitialState) => state
  );
  const selectUser =
    [...listUsers, ...listUsersFavorite].find(
      (user) => user.id === Number(id)
    ) || userTest;
  const verifyFavorite =
    listUsersFavorite.findIndex(
      (userFavorite) => userFavorite.id === selectUser?.id
    ) >= 0;
  const classes = useStyles();

  useEffect(() => {
    if (!selectUser && !userTest) navigate('/');
    if (
      selectUser?.bio === undefined &&
      !error &&
      selectUser?.login !== undefined
    )
      dispatch(getFullInfoUser({ user: selectUser.login }));
  }, []);

  console.log(selectUser);

  return (
    <Box data-testid={'test_details_page'} className={classes.detailsPage}>
      <Header type="details" name={selectUser?.login} />
      <Box className={classes.resultDetails}>
        <Box className={classes.detailsUser}>
          <Box
            component={'img'}
            src={selectUser?.avatar_url}
            className={classes.avatarDetails}
          />
          <Box className={classes.detailsInfoUser}>
            <Typography
              data-testid={'test_details_page_name_user'}
              className={classes.fullNameUser}
            >
              {selectUser?.name}
            </Typography>
            <Box
              component="a"
              href={selectUser?.html_url}
              data-testid={'test_details_page_login_user'}
              className={classes.nameUser}
            >{`@${selectUser?.login}`}</Box>
            <Typography className={classes.descriptionsUser}>
              {selectUser?.bio}
            </Typography>
            <Box className={classes.infoUser}>
              <Box className={classes.gitInfoUser}>
                <Typography
                  data-testid={'test_details_page_followers_user'}
                  className={classes.numberGitInfoUser}
                >
                  {selectUser?.followers}
                </Typography>
                <Typography className={classes.textGitInfoUser}>
                  Followers
                </Typography>
              </Box>
              <Box style={{ margin: '0 28px' }} className={classes.gitInfoUser}>
                <Typography
                  data-testid={'test_details_page_following_user'}
                  className={classes.numberGitInfoUser}
                >
                  {selectUser?.following}
                </Typography>
                <Typography className={classes.textGitInfoUser}>
                  FOLLOWING
                </Typography>
              </Box>
              <Box className={classes.gitInfoUser}>
                <Typography
                  data-testid={'test_details_page_public_repos_user'}
                  className={classes.numberGitInfoUser}
                >
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
