import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const statuses: { [key: string]: { backgroundColor: string} } = {
  "LIVE": {
    backgroundColor: "green",
  },
  "DEAD": {
    backgroundColor: "red",
  },
  "INPROGRESS": {
    backgroundColor: "blue",
  },
}

export const ProjectStatus = ({ status }: { status: string }) => {
  const classes = useStyles();
  const formattedStatus = status.replace(/\s/g, "").toUpperCase();
  return (
    <Chip
      label={status}
      className={classes.chip}
      style={{
        backgroundColor: statuses[formattedStatus].backgroundColor
      }}
      size="small"
    />
  );
};

const useStyles = makeStyles(theme => ({
  chip: {
    marginLeft: theme.spacing(1),
    alignSelf: "center",
  },
}));
