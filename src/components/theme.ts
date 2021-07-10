import { createMuiTheme } from "@material-ui/core/styles";

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      dead: React.CSSProperties['color'],
      inprogress: React.CSSProperties['color'],
      idea: React.CSSProperties['color'],
      live: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    status: {
      dead: React.CSSProperties['color'],
      inprogress: React.CSSProperties['color'],
      idea: React.CSSProperties['color'],
      live: React.CSSProperties['color'],
    }
  }
}

export const theme = createMuiTheme({
  status: {
    dead: "#ff4a4a",
    inprogress: "#6573c3",
    idea: "#d56edf",
    live: "#579f57",
  },
  palette: {
    type: 'dark',
    primary: {
      main: "#bac4ff",
    }
  },
  typography: {
    fontFamily: [
      "Raleway",
      "Roboto"
    ].join(','),
  }
});