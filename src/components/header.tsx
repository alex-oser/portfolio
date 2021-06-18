import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <div className={classes.headerContents}>
        <div style={{ alignSelf: "center" }}>
          <Link to="/" className={classes.link}>
            {siteTitle}
          </Link>
          <Link to="https://www.linkedin.com/in/alexander-oser-8901a5106/" className={classes.link}>
            <StaticImage
              src="../images/linkedin.svg"
              width={20}
              quality={95}
              // formats={["AUTO", "WEBP", "AVIF"]}
              alt="LinkedIn logo"
            />
          </Link>
        </div>
        <div style={{ display: "flex" }}>
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
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  link: {
    color: "white",
    textDecoration: "none",
    margin: theme.spacing(1),
  },
  headerContents: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
