import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
interface BlogProps extends PageProps {
  pageContext: {
    title: string,
    body: any,
  }
}

const BlogLayout = ({ pageContext }: BlogProps) => {
  return (
    <Layout>
      <div style={{ padding: 8 }}>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default BlogLayout;