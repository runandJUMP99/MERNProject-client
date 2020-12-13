import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    alignItems: 'center',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '30px 0',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));