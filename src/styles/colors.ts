import { createTheme } from "@mui/material";

export const ColorsILiked = {
    Primary: "#c60055",
    PrimaryLight: "#ea3b71",
    PrimaryDark: "#aa0040",
    PrimaryAlmostWhite: "#fff5f7",

    TextColor: "#110b0f",
    TextColorTitle: "#c60055",
};

export const theme = createTheme({
    palette: {
        primary: {
            main: ColorsILiked.Primary,
            light: ColorsILiked.PrimaryLight,
            dark: ColorsILiked.PrimaryDark,
            contrastText: ColorsILiked.PrimaryAlmostWhite,
        },
        success: { // same as primary
            main: ColorsILiked.Primary,
            light: ColorsILiked.PrimaryLight,
            dark: ColorsILiked.PrimaryDark,
            contrastText: ColorsILiked.PrimaryAlmostWhite,
        },
        error: {
            main: "#b71c1c",
            light: "#f05545",
            dark: "#7f0000",
            contrastText: ColorsILiked.PrimaryAlmostWhite,
        },
        background: {
            default: ColorsILiked.PrimaryAlmostWhite,
            paper: ColorsILiked.PrimaryAlmostWhite,
        },
        text: {
            primary: ColorsILiked.TextColor,
            secondary: ColorsILiked.Primary,
        }
    },
    typography: (palette) => ({
        h1: {color: palette.text.secondary},
        h2: {color: palette.text.secondary},
        h3: {color: palette.text.secondary},
        h4: {color: palette.text.secondary},
        h5: {color: palette.text.secondary},
        h6: {color: palette.text.secondary},
    }),
});