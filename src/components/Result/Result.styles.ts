import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  resultContainer: {
    width: '600px',
    background: theme.palette.common.white,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
  },
}));

export default useStyles;
