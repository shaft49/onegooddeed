import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: '50%',
    border: '3px solid #f44336',
    padding: '10px',
    backgroundColor: '#dde0d3',
    minWidth: 400,
    maxWidth: 600,
    minHeight: 200,
    marginTop: 20,
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
    textAlign: 'right'
  },
  messageText: {
    color: '#334747',
    textAlign: 'center'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent> 
        <Typography variant="h5" component="h2" align="center" className = {classes.messageText}>
          {props.message}
        </Typography>
        
      </CardContent>
      <CardContent>
        <Typography variant="body2" component="p" className = {classes.infoText}>
            -{props.name}, {props.location}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
