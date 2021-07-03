import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Link } from 'gatsby';

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
      <Card 
        className={clsx(classes.root, className)}
      >
        {children}
      </Card>
    </Link>
  );
};

const useStyles = makeStyles(({
  root: {
    width: "100%",
    height: 200,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
  }
}));
