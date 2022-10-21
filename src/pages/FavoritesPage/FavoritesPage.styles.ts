import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  favoritesPage: {},
  resultFavorites: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14px 0px',
    gap: '10px',
  },
  textNotResult: {
    fontSize: '14px',
  },
}));

export default useStyles;
