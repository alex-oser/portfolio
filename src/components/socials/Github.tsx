import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
const PREFIX = 'Github';

const classes = {
  link: `${PREFIX}-link`
};

const Root = styled('a')((
  {
    theme
  }
) => ({
  [`&.${classes.link}`]: {
    color: "white !important",
    textDecoration: "none",
    margin: theme.spacing(1),
  }
}));

export const Github = () => {

  return (
    (<Root href="https://github.com/alex-oser" className={classes.link} aria-label="GitHub profile" >
      <GitHubIcon />
    </Root>)
  );
}