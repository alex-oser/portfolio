import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
const PREFIX = 'LinkedIn';

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

export const LinkedIn = () => {

  return (
    (<Root href="https://www.linkedin.com/in/alexander-oser-8901a5106/" className={classes.link} aria-label="LinkedIn profile">
      <LinkedInIcon />
    </Root>)
  );
}