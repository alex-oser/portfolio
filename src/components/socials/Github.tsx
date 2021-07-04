import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from "@material-ui/core/styles";

export const Github = () => {
  const classes = useStyles();
  return (
    <a href="https://github.com/alex-oser" className={classes.link} aria-label="GitHub profile" >
      <GitHubIcon />
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