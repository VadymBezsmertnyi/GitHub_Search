import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  starFavoriteOff: {
    color: theme.palette.custom?.main.starFalse,
  },
  starFavoriteOn: {
    color: theme.palette.custom?.main.starTrue,
  },
  result: { padding: 0 },
  details: { padding: 0 },
  hide: { opacity: 0 },
  header: {},
}));

export default useStyles;
