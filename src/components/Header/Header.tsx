import { Box, Paper, InputBase, IconButton, Typography } from '@mui/material';
import {
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

import { IconFavorite } from 'components';

import useStyles from './Header.styles';
import { useNavigate } from 'react-router-dom';

interface IHeaderProps {
  type: 'home' | 'favorites' | 'details';
  name?: string;
}

const Header = ({ type, name = 'Name user' }: IHeaderProps) => {
  const navigate = useNavigate();
  const homePage = type === 'home';
  const favoritePage = type === 'favorites';
  const detailsPage = type === 'details';
  const classes = useStyles();

  const clickBack = () => {
    if (!homePage) navigate('/');
  };

  return (
    <Box className={classes.header}>
      <Paper component="form" className={classes.inputSearch}>
        <IconButton
          onClick={clickBack}
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
        >
          {homePage && <SearchIcon />}
          {!homePage && <ArrowBackIcon />}
        </IconButton>
        {favoritePage && (
          <Typography className={classes.input}>Favorites</Typography>
        )}
        {homePage && (
          <InputBase
            className={classes.input}
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
