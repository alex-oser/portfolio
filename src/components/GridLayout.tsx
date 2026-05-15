import { Typography } from "@mui/material";

import { styled } from '@mui/material/styles';
const PREFIX = 'GridLayout';

const classes = {
  grid: `${PREFIX}-grid`,
  title: `${PREFIX}-title`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.grid}`]: {
    display: "grid",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },

  [`& .${classes.title}`]: {
    marginBottom: theme.spacing(1),
  }
}));

export const GridLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {


  return (
    (<Root>
      <Typography
        variant="h4"
        id={title.toLowerCase().replace(" ", "-")}
        className={classes.title}
      >
        {title}
      </Typography>
      <div className={classes.grid}>{children}</div>
    </Root>)
  );
};
