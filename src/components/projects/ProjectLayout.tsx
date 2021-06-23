import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default ProjectLayout;