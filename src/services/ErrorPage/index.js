import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Template from '../../templates/AppTemplate';
import background from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        justifyContent: 'center',
    },
    messageWrapper: {
        padding: '2% 5%',
        textAlign: 'center',
        marginTop: theme.spacing(2),
    },
}));

const ErrorPage = ({ title, description }) => {
    const classes = useStyles();

    return (
        <Template>
            <Grid className={classes.container} container>
                <Grid item xs={3}>
                    <Paper className={classes.messageWrapper} elevation={3}>
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="h5">{description}</Typography>
                        <Link href="/">Back to Home</Link>
                    </Paper>
                </Grid>
            </Grid>
        </Template>
    );
};

export default ErrorPage;
