/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Header from "./header";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <LayoutWrapper>{children}</LayoutWrapper>
    </ThemeProvider>
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
      padding: `0 ${theme.spacing(10)}px`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
}));
