import {createTheme} from "@mui/material";


export interface ITheme {
    palette: {
        primary: {
            main: string
        },
        secondary: {
            main: string
        }
    },
    bg: {
        main: string,
        light: string
    },
    text: {
        main: string,
        light: string
    }
}

export default createTheme({
    palette: {
        primary: {
            main: '#3F8AE0'
        },
        secondary: {
            main: '#a24bd3'
        }
    },
    bg: {
        main: '#fff',
        light: '#F4F5F7'
    },
    text: {
        main: '#172B4D',
        light: '#262930'
    }
});