import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Typography } from "@material-ui/core";

interface ProjectProps extends PageProps {
  pageContext: {
    title: string,
    body: any,
  }
}

const ProjectLayout = ({ pageContext }: ProjectProps) => {
  return (
    <Layout>
      <div>
        <Typography variant="h3">{pageContext.title}</Typography>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default ProjectLayout;