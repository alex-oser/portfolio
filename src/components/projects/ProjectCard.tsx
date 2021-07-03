import { CardContent, CardActions, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardLayout } from "../CardLayout";
import { ProjectStatus } from "./ProjectStatus";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from 'gatsby';

const GitHubLink = ({ url } : { url: string }) => (
  <a
    target="_blank"
    href={url}
    onClick={e => e.stopPropagation()}
  >
    <GitHubIcon color="primary" />
  </a>
);

const SiteLink = ({ url } : { url: string }) => (
  <a target="_blank" href={url} onClick={e => e.stopPropagation()}>
    <LanguageIcon color="primary" />
  </a>
)

export const ProjectCard = ({
  title,
  status,
  caption,
  link,
  repo,
}: {
  title: string;
  status: string;
  caption: string;
  link: string;
  repo: string;
}) => {
  const classes = useStyles();
  const path = `projects/${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <CardLayout className={classes.layout}>
      <Link to={path} className={classes.link}>
        <CardContent style={{ color: "white" }}>
          <div style={{ display: "flex" }}>
            <Typography variant="h6">
              <strong>{title}</strong>
            </Typography>
            <ProjectStatus status={status} />
          </div>
          <Typography>{caption}</Typography>
        </CardContent>
      </Link>
      <CardActions>
        {repo && <GitHubLink url={repo} />}
        {link && <SiteLink url={link} />}
      </CardActions>
    </CardLayout>
  );
};

const useStyles = makeStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  }
});
