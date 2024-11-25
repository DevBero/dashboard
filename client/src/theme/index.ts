// Define interfaces for the color tokens
interface ColorPalette {
    [shade: number]: string;
}

interface Tokens {
    grey: ColorPalette;
    primary: ColorPalette;
    secondary: ColorPalette;
}

// Color design tokens export
export const tokensDark: Tokens = {
    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
    },
    primary: {
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45", // manually adjusted
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    secondary: {
        50: "#f0f0f0", // manually adjusted
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

function reverseTokens(tokens: Tokens): Tokens {
    const reversedTokens: Tokens = {
        grey: {},
        primary: {},
        secondary: {},
    };

    Object.entries(tokens).forEach(([key, val]) => {
        const reversedObj: ColorPalette = {};
        const entries = Object.entries(val) as [string, string][];
        entries.forEach(([shade], index) => {
            const reversedKey = entries[entries.length - index - 1][0];
            reversedObj[+shade] = val[+reversedKey];
        });
        reversedTokens[key as keyof Tokens] = reversedObj;
    });

    return reversedTokens;
}

export const tokensLight: Tokens = reverseTokens(tokensDark);

// MUI theme settings
export const themeSettings = (mode: "dark" | "light") => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // Palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[400],
                        light: tokensDark.primary[400],
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[300],
                    },
                    neutral: {
                        ...tokensDark.grey,
                        main: tokensDark.grey[500],
                    },
                    background: {
                        default: tokensDark.primary[600],
                        alt: tokensDark.primary[500],
                    },
                }
                : {
                    // Palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: tokensLight.grey[50],
                        light: tokensLight.grey[100],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensLight.secondary[600],
                        light: tokensLight.secondary[700],
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: tokensLight.grey[500],
                    },
                    background: {
                        default: tokensLight.grey[0],
                        alt: tokensLight.grey[50],
                    },
                }),
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
        },
    };
};