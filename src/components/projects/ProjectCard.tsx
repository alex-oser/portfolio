import { 
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

export const ProjectCard = ({ title, status, caption, link }: { title: string, status: string, caption: string, link: string, }) => {
  const classes = useStyles();
  return (
    <Link to={`/projects/${title.toLowerCase()}`} style={{ textDecoration: "none"}}>
      <Card className={classes.root}>
        <CardContent>
          <Typography>Title: {title}</Typography>
          <Typography>Status: {status}</Typography>
          <Typography>Description: {caption}</Typography>
        </CardContent>
        <CardActions>
          <Typography>Link: {link}</Typography>
        </CardActions>
      </Card>
    </Link>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  }
}))