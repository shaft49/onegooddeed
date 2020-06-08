import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    typography: {
        fontFamily:
            '"Roboto", "Noto Sans Bengali", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        primary: purple,
        secondary: {
            main: '#f44336',
            contrastText: '#fff',
        },
    },
});

export default theme;
