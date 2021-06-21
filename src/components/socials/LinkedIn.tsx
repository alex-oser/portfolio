import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

export const LinkedIn = () => {
  const classes = useStyles();
  return (
    <a href="https://www.linkedin.com/in/alexander-oser-8901a5106/" className={classes.link}>
      <StaticImage
        src="../../images/linkedin.svg"
        width={20}
        quality={95}
        // formats={["AUTO", "WEBP", "AVIF"]}
        alt="LinkedIn logo"
      />
    </a>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    color: "white",
    textDecoration: "none",
    margin: theme.spacing(1),
  },
}));