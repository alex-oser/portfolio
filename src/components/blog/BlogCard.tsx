import { 
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const BlogCard = ({ title }: { title: string }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>THis</Typography>
        <Typography>BLOG</Typography>
        <Typography>is</Typography>
        <Typography>{title}</Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  }
}))