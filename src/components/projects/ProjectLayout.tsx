import { Layout } from "../layout";
import { PageProps } from "gatsby";
import { Typography } from "@mui/material";

interface ProjectProps extends PageProps {
  pageContext: {
    title: string,
  }
}

const ProjectLayout = ({ pageContext, children }: ProjectProps) => {
  return (
    <Layout>
      <div>
        <Typography variant="h4">{pageContext.title}</Typography>
        {children}
      </div>
    </Layout>
  )
}

export default ProjectLayout;