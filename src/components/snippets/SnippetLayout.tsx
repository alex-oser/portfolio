import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs"

interface SnippetsProps extends PageProps {
  pageContext: {
    title: string;
    date: any;
    body: any;
  };
}

const SnippetLayout = ({ pageContext }: SnippetsProps) => {
  console.log(pageContext);
  const publishDate = dayjs(pageContext.date).format('MMMM DD, YYYY')
  return (
    <Layout>
      <div>
        <Typography variant="h3">{pageContext.title}</Typography>
        <Typography>{publishDate}</Typography>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default SnippetLayout;
