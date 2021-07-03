import { forwardRef, useRef, useEffect, useState } from "react";
import { Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { StaticImage } from "gatsby-plugin-image";
import { CurvedArrow } from "./CurvedArrow";
import { useWindowSize } from "./hooks";

export const Profile = forwardRef((_props: any, ref: any) => {
  return (
    <Typography variant="h5">
      I like to build things, climb things, and throw things for{" "}
      <span ref={ref}>Sadie</span>
      {/* <StaticImage
        src="../images/bone.svg"
        width={50}
        quality={95}
        alt="A dog bone"
      /> */}
    </Typography>
  );
});

export const About = () => {
  const classes = useStyles();
  const fromRef = useRef<HTMLDivElement>(null);
  const fromRefMobile = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const [fromRect, setFromRect] = useState<DOMRect | null>(null);
  const [fromRectMobile, setFromRectMobile] = useState<DOMRect | null>(null);
  const [toRect, setToRect] = useState<DOMRect | null>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (!fromRef.current) return;
    setFromRect(fromRef.current.getBoundingClientRect());
    if (!toRef.current) return;
    setToRect(toRef.current.getBoundingClientRect());
    if (!fromRefMobile.current) return;
    setFromRectMobile(fromRefMobile.current.getBoundingClientRect());
  }, [windowSize]);

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.textContainer}>
          <Typography variant="h3">Hi, I'm Alex</Typography>
          <Hidden xsDown>
            <Profile ref={fromRef} />
          </Hidden>
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
          <Hidden xsDown>
            <StaticImage
              src="../images/me.png"
              width={600}
              quality={95}
              alt="me"
              placeholder="blurred"
              loading="eager"
            />
          </Hidden>
        </div>
        {/* <Hidden xsDown>
          <CurvedArrow
            fromRect={fromRect}
            toRect={toRect}
            middleY={-90}
            fromOffsetY={-20}
            toOffsetX={-60}
            zIndex={99}
          />
        </Hidden>
        <Hidden smUp>
          <CurvedArrow
            fromRect={fromRectMobile}
            toRect={toRect}
            middleY={-90}
            fromOffsetY={-20}
            toOffsetX={-60}
            zIndex={99}
          />
        </Hidden> */}
      </div>
      <Hidden smUp>
        <Profile ref={fromRefMobile} />
      </Hidden>
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
