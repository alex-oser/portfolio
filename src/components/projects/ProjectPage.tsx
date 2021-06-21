import { Layout } from "../layout";
import { PageProps } from "gatsby";

interface ProjectProps extends PageProps {
  pageContext: {
    title: string
  }
}

const ProjectPage = (props: ProjectProps) => {

  return (
    <Layout>
      <div>
        {props.pageContext.title} is a sick project YO
      </div>
    </Layout>
  )
}

export default ProjectPage;