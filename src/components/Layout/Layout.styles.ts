import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.custom?.main.backgroundBody,
  },
}));

export default useStyles;
