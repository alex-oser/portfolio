import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

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
      <Typography variant="h4" className={classes.title}>{title}</Typography>
      <div className={classes.projectsGrid}>{children}</div>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  projectsGrid: {
    display: "grid",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  title: {
    marginBottom: theme.spacing(1),
  }
}));
