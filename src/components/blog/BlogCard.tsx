import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardLayout } from "../CardLayout";

export const BlogCard = ({
  title,
  date,
  caption,
}: {
  title: string;
  date: string;
  caption: string;
}) => {
  const classes = useStyles();
  return (
    <CardLayout path={`/blog/${title}`}>
      <CardContent>
        <Typography variant="h6"><strong>{title}</strong></Typography>
        <Typography variant="subtitle2">{(new Date(date)).toDateString()}</Typography>
        <Typography>{caption}</Typography>
      </CardContent>
    </CardLayout>
  );
};

const useStyles = makeStyles(theme => ({
}));
