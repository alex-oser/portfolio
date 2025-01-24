import { Chip, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

export const ProjectStatus = ({ status }: { status: string }) => {
  const formattedStatus: string = status.replace(/\s/g, "").toLowerCase();
  const classes = useStyles({ formattedStatus });
  return (
    <Chip 
      label={<Typography variant="subtitle2" style={{ fontWeight: 700 }}>{status}</Typography>} 
      className={classes.chip} 
      size="small" 
    />);
};

const useStyles = makeStyles((theme: any) => ({
  chip: {
    marginLeft: theme.spacing(1),
    alignSelf: "center",
    backgroundColor: ({ formattedStatus }: { formattedStatus: string }) => theme.status[formattedStatus],
  },
}));
