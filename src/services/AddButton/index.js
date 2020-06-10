import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  addButton: {
    color: '#334747',
    backgroundColor: '#dde0d3',
    border: '1px solid orange',
    marginTop: 10,
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button className = {classes.addButton} variant="contained" onClick={() => props.handleClick()}>Add Your Own</Button>
    </div>
  );
}
