import PropTypes from "prop-types";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { LinkedIn } from "./socials/LinkedIn";

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.headerContents}>
        <div style={{ alignSelf: "center" }}>
          <Link to="/" className={classes.link}>
            {siteTitle}
          </Link>
          <LinkedIn />
        </div>
        <div style={{ display: "flex", alignSelf: "center" }}>
          <Link to="/" className={classes.link}>
            About
          </Link>
          <Link to="/" className={classes.link}>
            Projects
          </Link>
          <Link to="/" className={classes.link}>
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  link: {
    color: "white",
    textDecoration: "none",
    margin: theme.spacing(1),
  },
  header: {
    top: 0,
    left: "auto",
    right: 0,
    position: "sticky",
    height: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  headerContents: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },
}));

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
