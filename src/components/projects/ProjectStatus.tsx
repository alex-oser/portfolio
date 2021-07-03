import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

export const ProjectStatus = ({ status }: { status: string }) => {
  const formattedStatus: string = status.replace(/\s/g, "").toLowerCase();
  const classes = useStyles({ formattedStatus });
  return <Chip label={status} className={classes.chip} size="small" />;
};

const useStyles = makeStyles((theme: any) => ({
  chip: {
    marginLeft: theme.spacing(1),
    alignSelf: "center",
    backgroundColor: ({ formattedStatus }: { formattedStatus: string }) =>
      theme.status[formattedStatus],
  },
}));
