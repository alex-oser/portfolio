import PropTypes from "prop-types";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { LinkedIn } from "./socials/LinkedIn";
import { Github } from "./socials/Github";

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const classes = useStyles();
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
    <div className={classes.root}>
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
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  link: {
    color: "white !important",
    textDecoration: "none",
    margin: theme.spacing(1),
  },
  root: {
    top: 0,
    left: "auto",
    right: 0,
    // position: "sticky",
    height: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  headerContents: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
}));

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
