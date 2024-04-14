import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Noto Sans', sans-serif",
      color: "#343434",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" && {
            backgroundColor: "#343434",
            borderRadius: 0,
            textTransform: "none",
            ":hover": {
              backgroundColor: "#343434",
            },
          }),
          ...(ownerState.variant === "outlined" && {
            border: "1px solid #343434",
            borderRadius: 0,
            color: "#343434",
            textTransform: "none",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
            ":hover": {
              border: "1px solid #343434",
              boxShadow: "none",
              backgroundColor: "#ffffff",
            },
          }),
        }),
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          border: "1px solid #343434",
          borderRadius: 0,
          color: "#343434",
          transition: "all 0.2s ease-in",
          ":hover": {
            backgroundColor: "#F5F5F5",
          },
        },
      },
    },
  },
});

export default theme;
