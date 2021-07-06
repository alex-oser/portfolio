import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardLayout } from "../CardLayout";
import { Link } from "gatsby";

export const BlogCard = ({
  title,
  caption,
  date,
}: {
  title: string;
  caption: string;
  date: string,
}) => {
  const classes = useStyles();
  const path = `blog/${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <CardLayout>
      <Link to={path} className={classes.link}>
        <CardContent style={{ color: "white", }}>
          <Typography variant="h6"><strong>{title}</strong></Typography>
          <Typography variant="subtitle2">{(new Date(date)).toDateString()}</Typography>
          <Typography>{caption}</Typography>
        </CardContent>
      </Link>
    </CardLayout>
  );
};

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    height: "100%",
  },
}));
