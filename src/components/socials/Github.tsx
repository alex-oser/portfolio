import GitHubIcon from '@mui/icons-material/GitHub';
import makeStyles from '@mui/styles/makeStyles';

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