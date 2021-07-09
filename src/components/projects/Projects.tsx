import { ProjectCard } from "./ProjectCard";
import { GridLayout } from "../GridLayout";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/projects/"}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      nodes {
        slug
        frontmatter {
          title
          status
          caption
          link
          repo
          date          
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
        return (
          <ProjectCard 
            key={project.frontmatter.title} 
            frontmatter={project.frontmatter}
          />
        );
      })}
    </GridLayout>
  );
};
