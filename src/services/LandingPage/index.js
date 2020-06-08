import React from 'react';
import Typography from '@material-ui/core/Typography';
import Template from '../../templates/AppTemplate';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import styles from './styles'
const useStyles = makeStyles(styles)
function haandleClick() {
    console.log('hello')
}
const LandingPage = (props) => {
    const classes = useStyles()
    return (
        <Template>
            <Typography variant="h4" align="center">What is the one good deed that you've done today?</Typography>
            <Typography align = "center">
                <Button className = {classes.addButton} variant="contained" onClick = {haandleClick}>Add Your Own</Button>
            </Typography>
            
        </Template>
    );
};

export default LandingPage;
