import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

export const Github = () => {
  const classes = useStyles();
  return (
    <a href="https://github.com/alex-oser" className={classes.link}>
      <StaticImage
        src="../../images/github.svg"
        width={20}
        quality={95}
        // formats={["AUTO", "WEBP", "AVIF"]}
        alt="Github logo"
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