// import { ThemeOptions } from '@mui/material/styles';
import { ThemeOptions } from "@mui/material/styles"

export const darkPalette = {
    grey: {
        0: "#ffffff",
        10: "#f6f6f6",
        50: "#f0f0f0",
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000",
    },
    primary: {
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45",
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    secondary: {
        50: "#f0f0f0",
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",
    },
};

export const lightPalette = {
    grey: {
        0: "#000000",
        10: "#141414",
        50: "#292929",
        100: "#3d3d3d",
        200: "#525252",
        300: "#666666",
        400: "#858585",
        500: "#a3a3a3",
        600: "#c2c2c2",
        700: "#e0e0e0",
        800: "#f0f0f0",
        900: "#f6f6f6",
        1000: "#ffffff",
    },
    primary: {
        100: "#070812",
        200: "#0d1025",
        300: "#141937",
        400: "#191F45",
        500: "#21295c",
        600: "#4d547d",
        700: "#7a7f9d",
        800: "#a6a9be",
        900: "#d3d4de",
    },
    secondary: {
        50: "#332a14",
        100: "#665429",
        200: "#997d3d",
        300: "#cca752",
        400: "#ffd166",
        500: "#ffda85",
        600: "#ffe3a3",
        700: "#ffedc2",
        800: "#fff6e0",
        900: "#f0f0f0",
    },
};


export const themeSettings = (mode: "dark" | "light"): ThemeOptions => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark")
                ? {
                    primary: {
                        ...darkPalette.primary
                    },
                    secondary: {
                        ...darkPalette.secondary,
                        main: darkPalette.secondary[300],
                    },
                    neutral: {
                        ...darkPalette.grey,
                        main: darkPalette.grey[500],
                    },
                    background: {
                        default: darkPalette.primary[600],
                        alt: darkPalette.primary[500],
                    },
                }
                : {
                    primary: {
                        ...lightPalette.primary,
                        main: darkPalette.grey[50],
                        light: darkPalette.grey[100],
                    },
                    secondary: {
                        ...lightPalette.secondary,
                        main: darkPalette.secondary[600],
                        light: darkPalette.secondary[700],
                    },
                    neutral: {
                        ...lightPalette.grey,
                        main: darkPalette.grey[500],
                    },
                    background: {
                        default: darkPalette.grey[0],
                        alt: darkPalette.grey[50],
                    },

                }
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    }
}