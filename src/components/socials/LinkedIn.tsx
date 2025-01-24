import LinkedInIcon from '@mui/icons-material/LinkedIn';
import makeStyles from '@mui/styles/makeStyles';

export const LinkedIn = () => {
  const classes = useStyles();
  return (
    <a href="https://www.linkedin.com/in/alexander-oser-8901a5106/" className={classes.link} aria-label="LinkedIn profile">
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