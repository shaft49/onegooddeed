import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/images/logo.png';
import styles from './styles';

const useStyles = makeStyles(styles);

const Topbar = (props) => {
    const classes = useStyles();

    return (
        <AppBar className = {classes.root} position="sticky">
            <Toolbar>
                <IconButton>
                    <img className={classes.logo} src={logo} alt="logo" />
                </IconButton>
                <Typography  variant="h4"><span className = {classes.textOne} >One </span><span className = {classes.textTwo}>Good Deed</span></Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
