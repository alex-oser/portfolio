import { Typography } from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

export const GridLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" id={title.toLowerCase().replace(" ", "-")} className={classes.title}>{title}</Typography>
      <div className={classes.grid}>{children}</div>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  grid: {
    display: "grid",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  title: {
    marginBottom: theme.spacing(1),
  }
}));
