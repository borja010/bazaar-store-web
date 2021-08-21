import { indigo, cyan, red } from "@material-ui/core/colors";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: cyan,
        error: red,
        background: {
            default: "#fff",
        },
    },
    typography: {
        fontFamily: "Krub",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
});

export default theme;