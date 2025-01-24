/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { theme } from "./theme";
import Header from "./header";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const Layout = ({ children }: { children: any }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const LayoutWrapper = ({ children }: { children: any }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  layout: {
    margin: "auto",
    maxWidth: 1400,
    [theme.breakpoints.up("md")]: {
      padding: `0 ${theme.spacing(10)}`,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    },
  },
}));
