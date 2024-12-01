import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: string]: string; // Allow indexed properties like '600' or '200'.
    }

    interface PaletteOptions {
        primary?: PaletteColorOptions & { [key: string]: string };
        secondary?: PaletteColorOptions & { [key: string]: string };
    }

    interface Palette {
        primary: PaletteColor;
        secondary: PaletteColor;
    }

    interface TypeBackground {
        alt?: string; // Custom property for background.
    }

    interface PaletteOptions {
        background?: Partial<TypeBackground>;
    }

    interface Palette {
        background: TypeBackground;
    }
}
