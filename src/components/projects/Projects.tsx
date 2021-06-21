import { ProjectCard } from "./ProjectCard";
import { GridLayout } from "../GridLayout";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
          status
          caption
          link
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
        } = project.frontmatter;
        return (
          <ProjectCard 
            key={project.frontmatter.title} 
            title={title}
            status={status}
            caption={caption}
            link={link}
          />
        );
      })}
    </GridLayout>
  );
};
