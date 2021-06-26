import { 
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardLayout } from "../CardLayout";
import { ProjectStatus } from "./ProjectStatus";
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

export const ProjectCard = ({ title, status, caption, link }: { title: string, status: string, caption: string, link: string, }) => {
  const classes = useStyles();
  return (
    <CardLayout className={classes.layout} path={`projects/${title}`}>
      <CardContent>
        <div style={{ display: "flex" }}>
          <Typography variant="h6"><strong>{title}</strong></Typography>
          <ProjectStatus status={status} />
        </div>
        <Typography>{caption}</Typography>
      </CardContent>
      <CardActions>                 
        <a target="_blank" href="https://github.com/alex-oser" onClick={e => e.stopPropagation()}>
          <GitHubIcon color="primary" />
        </a>
        {link && <a target="_blank" href={link} onClick={e => e.stopPropagation()}>
          <LanguageIcon color="primary" />
        </a>}
      </CardActions>
    </CardLayout>
  )
}

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
}))