import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, InputBase, IconButton, Typography } from '@mui/material';
import {
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

import { IconFavorite } from 'components';
import { searchUser } from 'reducers/reducer';
import { AppDispatch } from 'store/store';

import useStyles from './Header.styles';

export interface IHeaderProps {
  type: 'home' | 'favorites' | 'details';
  name?: string;
}

const Header = ({ type, name = 'Name user' }: IHeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const homePage = type === 'home';
  const favoritePage = type === 'favorites';
  const detailsPage = type === 'details';
  const classes = useStyles();

  const clickBack = () => {
    if (!homePage) navigate('/');
  };

  const enterNameUser = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = event;
    if (value.length >= 3) dispatch(searchUser({ user: value }));
  };

  return (
    <Box data-testid={'test_component_header'} className={classes.header}>
      <Paper component="form" className={classes.inputSearch}>
        <IconButton
          onClick={clickBack}
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
        >
          {homePage && (
            <SearchIcon data-testid={'test_component_header_home_icon'} />
          )}
          {!homePage && <ArrowBackIcon data-testid={'test_component_header_not_home_icon'} />}
        </IconButton>
        {favoritePage && (
          <Typography data-testid={'test_component_header_favorites_title'} className={classes.input}>Favorites</Typography>
        )}
        {homePage && (
          <InputBase
            data-testid={'test_component_header_home_input'}
            className={classes.input}
            onChange={enterNameUser}
            placeholder="Search for GitHub users..."
            inputProps={{ 'aria-label': 'Search for GitHub users...' }}
          />
        )}
        {type === 'details' && (
          <Typography className={classes.input}>{name}</Typography>
        )}
        <IconFavorite
          favorite={favoritePage}
          type={detailsPage ? 'hide' : 'header'}
        />
      </Paper>
    </Box>
  );
};

export default Header;
