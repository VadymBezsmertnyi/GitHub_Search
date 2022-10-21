import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  homePage: {},
  headerHome: {
    //width: '100%',
    height: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px',
    gap: '14px',

    background: theme.palette.common.white,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
  },
  inputSearch: {
    display: 'flex',
    alignItems: 'center',
    //width: 400,
    boxShadow: 'none',
  },
  input: {
    width: '505px',
    marginLeft: '0px',
    fontSize: '21px',
  },
  resultHome: {
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
