import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import { Link } from "gatsby";
import { LinkedIn } from "./socials/LinkedIn";
import { Github } from "./socials/Github";

const PREFIX = 'Header';

const classes = {
  link: `${PREFIX}-link`,
  root: `${PREFIX}-root`,
  headerContents: `${PREFIX}-headerContents`,
  headerLeft: `${PREFIX}-headerLeft`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.link}`]: {
    color: "white !important",
    textDecoration: "none",
    margin: theme.spacing(1),
  },

  [`&.${classes.root}`]: {
    top: 0,
    left: "auto",
    right: 0,
    // position: "sticky",
    height: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.headerContents}`]: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },

  [`& .${classes.headerLeft}`]: {
    display: "flex",
    alignItems: "center",
  }
}));

const Header = ({ siteTitle }: { siteTitle: string }) => {

  // If already on the home page, scroll smoothly to section - else navigate normally
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    const location = window.location.href;
    const re = /([a-z][a-z0-9+\-.]*:(\/\/[^\/?#]+)?)?(?<path>[a-z0-9\-._~%!$&'()*+,;=:@\/]*)/;
    const matches = location.match(re)?.groups;
    if (!matches) return;
    const path = matches["path"];
    if (path === "/" || path.startsWith("/#")) {
      e.preventDefault();
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    (<Root className={classes.root}>
      <div className={classes.headerContents}>
        <div className={classes.headerLeft}>
          <Link to="/" className={classes.link}>
            {siteTitle}
          </Link>
          <LinkedIn />
          <Github />
        </div>
        <div style={{ display: "flex", alignSelf: "center" }}>
          <Link
            to="/#projects"
            className={classes.link}
            onClick={e => handleNavigation(e, "projects")}
          >
            Projects
          </Link>
          <Link
            to="/#snippets"
            className={classes.link}
            onClick={e => handleNavigation(e, "snippets")}
          >
            Snippets
          </Link>
          {/* <Link
            to="/#blog"
            className={classes.link}
            onClick={e => handleNavigation(e, "blog")}
          >
            Blog
          </Link> */}
        </div>
      </div>
    </Root>)
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
