import { PageProps } from "gatsby";
import { Layout } from "../components/layout";
import Seo from "../components/seo";
import { About } from "../components/about";
import { Projects } from "../components/projects/Projects";
import { BlogPosts } from "../components/blog/BlogPosts";

const IndexPage = (props: PageProps) => (
  <Layout>
    <Seo title="Home" />
    <About />
    <Projects />
    <BlogPosts />
  </Layout>
);

export default IndexPage;
