import { Card } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import clsx from "clsx";

export const CardLayout = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const classes = useStyles();
  return <Card className={clsx(classes.root, className)}>{children}</Card>;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 200,
    cursor: "pointer",
  },
});
