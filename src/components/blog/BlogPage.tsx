import { Layout } from "../layout";
import { PageProps } from "gatsby";

interface BlogProps extends PageProps {
  pageContext: {
    title: string
  }
}

const BlogPage = (props: BlogProps) => {

  return (
    <Layout>
      <div>
        {props.pageContext.title} is a sick BLOG YO
      </div>
    </Layout>
  )
}

export default BlogPage;