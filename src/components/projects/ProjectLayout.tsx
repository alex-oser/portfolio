import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Typography } from "@mui/material";

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
        <Typography variant="h4">{pageContext.title}</Typography>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default ProjectLayout;