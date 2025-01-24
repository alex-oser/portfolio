import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Typography } from "@mui/material";
import dayjs from "dayjs"

interface BlogProps extends PageProps {
  pageContext: {
    title: string;
    date: any;
    body: any;
  };
}

const BlogLayout = ({ pageContext }: BlogProps) => {
  console.log(pageContext);
  const publishDate = dayjs(pageContext.date).format('MMMM DD, YYYY')
  return (
    <Layout>
      <div>
        <Typography variant="h4">{pageContext.title}</Typography>
        <Typography>{publishDate}</Typography>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default BlogLayout;
