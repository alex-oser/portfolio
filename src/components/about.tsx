import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { StaticImage } from "gatsby-plugin-image";

export const Profile = ({ className }: { className: string }) => {
  return (
    <Typography variant="h5" className={className}>
      I like to build things, climb things, and throw things for Sadie
    </Typography>
  );
};

export const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.textContainer}>
          <Typography variant="h3">Hi, I'm Alex</Typography>
          <Profile className={classes.hideMobile} />
        </div>
        <StaticImage
          src="../images/hello.svg"
          width={600}
          quality={95}
          alt="A Gatsby astronaut"
        />
      </div>
      <Profile className={classes.showMobile} />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  textContainer: {
    alignSelf: "center",
    maxWidth: 600,
  },
  flex: {
    display: "flex",
  },
  hideMobile: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  showMobile: {
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
