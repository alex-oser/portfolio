import PropTypes from "prop-types";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { LinkedIn } from "./socials/LinkedIn";
import { Github } from "./socials/Github";

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const classes = useStyles();

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
          <Link to="/#about" className={classes.link}>
            About
          </Link>
          <Link to="/#projects" className={classes.link}>
            Projects
          </Link>
          <Link to="/#blog" className={classes.link}>
            Blog
          </Link>
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
  }
}));

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
