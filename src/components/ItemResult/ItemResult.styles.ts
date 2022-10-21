import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  itemResultContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 15px 0px',
  },
  mainItemResultContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  avatarUser: { width: '40px', height: '40px', borderRadius: '20px' },
  textUserContainer: {
    width: '100%',
    marginLeft: '10px',
  },
  nameUser: {
    fontSize: '14px',
  },
  descriptionsUser: {
    fontSize: '14px',
    letterSpacing: '0.15px',
    color: theme.palette.custom?.main.fontDescriptions,
  },
  lineItemResult: {
    width: '100%',
    paddingTop: '15px',
  },
}));

export default useStyles;
