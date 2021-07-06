import { Layout } from "../components/layout";
import Seo from "../components/seo";
import { About } from "../components/about";
import { Projects } from "../components/projects/Projects";
import { Snippets } from "../components/snippets/Snippets";
import { BlogPosts } from "../components/blog/BlogPosts";
import "../styles.css"

const IndexPage = () => {
  return (
  <Layout>
    <Seo title="Home" />
    <About />
    <Projects />
    <Snippets />
    <BlogPosts />
  </Layout>
)};

export default IndexPage;
