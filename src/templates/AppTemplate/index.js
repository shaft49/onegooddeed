import React from 'react';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Topbar from '../../services/Topbar';
import theme from '../../setupTheme';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
    },
    container: {
        flex: '1 1 auto'
    },
}));

const AppTemplate = (props) => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Topbar />
                    <div className={classes.container}>{props.children}</div>
                </div>
            </MuiThemeProvider>
        </>
    );
};

export default AppTemplate;
