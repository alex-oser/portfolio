import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { Typography } from "@mui/material";
import dayjs from "dayjs"

interface SnippetsProps extends PageProps {
  pageContext: {
    title: string;
    date: any;
    body: any;
  };
}

const SnippetLayout = ({ pageContext, children }: SnippetsProps) => {
  console.log(pageContext);
  const publishDate = dayjs(pageContext.date).format('MMMM DD, YYYY')
  return (
    <Layout>
      <div>
        <Typography variant="h4">{pageContext.title}</Typography>
        <Typography>{publishDate}</Typography>
        {children}
      </div>
    </Layout>
  );
};

export default SnippetLayout;
