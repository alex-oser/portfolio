import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from "@material-ui/core/styles";

export const LinkedIn = () => {
  const classes = useStyles();
  return (
    <a href="https://www.linkedin.com/in/alexander-oser-8901a5106/" className={classes.link}>
      <LinkedInIcon />
    </a>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    color: "white !important",
    textDecoration: "none",
    margin: theme.spacing(1),
  },
}));