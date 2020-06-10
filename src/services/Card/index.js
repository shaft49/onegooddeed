import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#dde0d3',
    minWidth: 50,
    maxWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  infoText: {
    color: '#d41717',
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent> 
        <Typography variant="h5" component="h2" align="center">
          {props.message}
        </Typography>
        
      </CardContent>
      <Typography variant="body2" component="p" className = {classes.infoText}>
            -{props.name}, {props.location}
      </Typography>
    </Card>
  );
}
