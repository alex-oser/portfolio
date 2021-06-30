import { Layout } from "../components/layout";
import Seo from "../components/seo";
import { About } from "../components/about";
import { Projects } from "../components/projects/Projects";
import { BlogPosts } from "../components/blog/BlogPosts";
import "../styles.css"

const IndexPage = () => {
  return (
  <Layout>
    <Seo title="Home" />
    <About />
    <Projects />
    <BlogPosts />
  </Layout>
)};

export default IndexPage;
