import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    status: {
      dead: React.CSSProperties['color'],
      inprogress: React.CSSProperties['color'],
      idea: React.CSSProperties['color'],
      live: React.CSSProperties['color'],
    }
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#383636"
    },
    primary: {
      main: "#bac4ff",
    }
  },
  typography: {
    fontFamily: [
      "Raleway",
      "Roboto"
    ].join(','),
  },
  status: {
    dead: "#ff4a4a",
    inprogress: "#6573c3",
    idea: "#d56edf",
    live: "#579f57",
  },
});