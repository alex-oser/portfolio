import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
interface ProjectProps extends PageProps {
  pageContext: {
    title: string,
    body: any,
  }
}

const ProjectPage = ({ pageContext }: ProjectProps) => {
  return (
    <Layout>
      <div>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default ProjectPage;