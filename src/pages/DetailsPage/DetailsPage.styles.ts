import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  detailsPage: {},
  resultDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14px 0px',
    gap: '10px',
  },
  detailsUser: {
    width: '600px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '14px',
    gap: '14px',
    background: theme.palette.common.white,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
  },
  avatarDetails: { width: '150px', height: '150px', borderRadius: '7px' },
  detailsInfoUser: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fullNameUser: {
    fontSize: '28px',
    letterSpacing: '0.15px',
  },
  nameUser: {
    fontSize: '14px',
    letterSpacing: '0.15px',
    color: theme.palette.custom?.main.link,
    textDecoration: 'none',
  },
  descriptionsUser: {
    fontSize: '14px',
    letterSpacing: '0.15px',
    color: theme.palette.custom?.main.fontDescriptions,
  },
  infoUser: {
    display: 'flex',
    marginTop: '10px',
  },
  gitInfoUser: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  numberGitInfoUser: {
    fontSize: '28px',
    letterSpacing: '0.15px',
  },
  textGitInfoUser: {
    fontSize: '10px',
    letterSpacing: '0.15px',
    textTransform: 'uppercase',
    color: theme.palette.custom?.main.fontDescriptions,
  },
}));

export default useStyles;
