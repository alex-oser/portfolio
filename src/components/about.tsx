import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { StaticImage } from "gatsby-plugin-image";

export const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="h3">Hi, I'm Alex</Typography>
        <Typography variant="h5">I like to build things, climb things, and throw things for Sadie</Typography>
      </div>
      <StaticImage
        src="../images/hello.svg"
        width={600}
        quality={95}
        // formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  textContainer: {
    alignSelf: "center",
    maxWidth: 600,
  }
}))