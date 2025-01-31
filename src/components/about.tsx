import { forwardRef, useRef } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { StaticImage } from "gatsby-plugin-image";

export const Profile = forwardRef((_props: any, ref: any) => {
  return (
    <Typography variant="h5">
      I like to build things, climb things, and throw things for{" "}
      <span ref={ref}>Sadie</span>
    </Typography>
  );
});

export const About = () => {
  const classes = useStyles();
  const fromRef = useRef<HTMLDivElement>(null);
  const fromRefMobile = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  const smDown = useMediaQuery(theme => theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.textContainer}>
          <Typography variant="h3">Hi, I'm Alex</Typography>
          {!smDown && <Profile ref={fromRef} />}
        </div>
        <div style={{ display: "flex" }}>
          <div ref={toRef} style={{ alignSelf: "flex-end" }}>
            <StaticImage
              src="../images/sadie.png"
              width={400}
              quality={95}
              placeholder="blurred"
              alt="sadie"
              loading="eager"
            />
          </div>
          {!smDown && (
            <StaticImage
              src="../images/me.png"
              width={600}
              quality={95}
              alt="me"
              placeholder="blurred"
              loading="eager"
            />
          )}
        </div>
      </div>
      {smDown && <Profile ref={fromRefMobile} />}
    </div>
  );
};

const useStyles = makeStyles({
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
});
