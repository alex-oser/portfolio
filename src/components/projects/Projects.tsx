import { ProjectCard } from "./ProjectCard";
import { GridLayout } from "../GridLayout";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/projects/"}}
      sort: {fields: [frontmatter___title], order: DESC}
    ) {
      nodes {
        slug
        frontmatter {
          title
          status
          caption
          link
          repo
        }
      }
    }
  }
`;

export const Projects = () => {
  const data = useStaticQuery(query);
  const projects = data.allMdx.nodes;
  return (
    <GridLayout title={"Projects"}>
      {projects.map((project: any) => {
        const { 
          title,
          status,
          caption,
          link,
          repo,
        } = project.frontmatter;
        return (
          <ProjectCard 
            key={project.frontmatter.title} 
            title={title}
            status={status}
            caption={caption}
            repo={repo}
            link={link}
          />
        );
      })}
    </GridLayout>
  );
};
