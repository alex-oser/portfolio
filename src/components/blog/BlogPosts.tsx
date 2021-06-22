import { BlogCard } from "./BlogCard";
import { GridLayout } from "../GridLayout";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      nodes {
        slug
        frontmatter {
          title
          date
          caption
        }
      }
    }
  }
`;

export const BlogPosts = () => {
  const data = useStaticQuery(query);
  const blogPosts = data.allMdx.nodes;
  return (
    <GridLayout title={"Blog"}>
      {blogPosts.map((post: any) => {
        const { title, date, caption } = post.frontmatter;
        return (
          <BlogCard
            key={`${title}-${date}`}
            title={title}
            date={date}
            caption={caption}
          />
        );
      })}
    </GridLayout>
  );
};
