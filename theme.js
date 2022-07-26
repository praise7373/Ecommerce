import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00e676',
            light: '#66ffa6',
            dark: '#00b248'
        },
        secondary: {
            main: '#ff3d00',
            light: '#ff7539',
            dark: '#c30000' 
        },
        error: {
            main: red.A400,
        },
        background: {
            dafault: '#fafafa'
        },
    },
});

export default theme;