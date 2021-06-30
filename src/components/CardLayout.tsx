import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { navigate } from 'gatsby';

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
    <Card 
      className={clsx(classes.root, className)}
      onClick={() => navigate(path.replace(/\s+/g, "-").toLowerCase())}
    >
      {children}
    </Card>
  );
};

const useStyles = makeStyles(({
  root: {
    width: "100%",
    height: 200,
    cursor: "pointer",
  },
}));
