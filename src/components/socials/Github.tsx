import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

export const Github = () => {
  const classes = useStyles();
  return (
    <Link to="https://github.com/alex-oser" className={classes.link}>
      <StaticImage
        src="../../images/github.svg"
        width={20}
        quality={95}
        // formats={["AUTO", "WEBP", "AVIF"]}
        alt="Github logo"
      />
    </Link>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    color: "white",
    textDecoration: "none",
    margin: theme.spacing(1),
  },
}));