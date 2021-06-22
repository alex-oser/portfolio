import { Card } from "@material-ui/core";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

export const CardLayout = ({
  className,
  path,
  children,
}: {
  className?: string;
  path: string;
  children: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <Link to={path.replace(/\s+/g, "-").toLowerCase()} className={classes.link}>
      <Card className={clsx(classes.root, className)}>{children}</Card>
    </Link>
  );
};

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
  },
  root: {
    width: "100%",
    height: 200,
  },
}));
