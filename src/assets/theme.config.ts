import { createTheme } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

const color = red[700];
const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#00689B",
        light: blue[500],
      },
      success: {
        main: green[500],
      },
    },

    typography: {
      poster: {
        fontSize: "4rem",
        color: color,
        fontWeight: "bolder",
      },
      subtitle2: {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
    },

    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            poster: "h1",
          },
        },
      },
    },
  },
);

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
  }
}

export default theme;
