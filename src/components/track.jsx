import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '50px',
    display:'flex',
    justifyContent:'space-between' 

  },
  des: {
    textAlign: 'left'
  },
  title: {
    color: 'blue',
 
  },
  icon: {
    textAlign: 'right'
  }
}));

export default function PaperSheet(props) {
  const { name, length, artist, url, deleteTrackHandler} = props
  const classes = useStyles();


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.root} >

          <div className={classes.des}>
            <Typography className={classes.title} variant="h5" component="h3">
              {name}-{artist}
            </Typography>
            <Typography  variant="h5" component="h3">
              {length}
            </Typography>
            <Typography   variant="h5" component="h3">
              {url}
            </Typography>
          </div>

          <div className={classes.icon}>
          <CloseIcon onClick={deleteTrackHandler} />
       
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}