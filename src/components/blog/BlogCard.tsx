import { CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CardLayout } from "../CardLayout";
import { Link } from "gatsby";

const PREFIX = 'BlogCard';

const classes = {
  link: `${PREFIX}-link`
};

const StyledCardLayout = styled(CardLayout)((
  {
    theme
  }
) => ({
  [`& .${classes.link}`]: {
    textDecoration: "none",
    height: "100%",
  }
}));

export const BlogCard = ({
  title,
  caption,
  date,
}: {
  title: string;
  caption: string;
  date: string,
}) => {

  const path = `blog/${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    (<StyledCardLayout>
      <Link to={path} className={classes.link}>
        <CardContent style={{ color: "white", }}>
          <Typography variant="h6"><strong>{title}</strong></Typography>
          <Typography variant="subtitle2">{(new Date(date)).toDateString()}</Typography>
          <Typography>{caption}</Typography>
        </CardContent>
      </Link>
    </StyledCardLayout>)
  );
};
