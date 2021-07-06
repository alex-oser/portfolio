import { SnippetCard } from "./SnippetCard";
import { GridLayout } from "../GridLayout";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/snippets/"}}
    ) {
      nodes {
        slug
        frontmatter {
          title
          caption
          date
        }
      }
    }
  }
`;

export const Snippets = () => {
  const data = useStaticQuery(query);
  const snippets = data.allMdx.nodes;
  return (
    <GridLayout title={"Snippets"}>
      {snippets.map((post: any) => {
        const { title, date, caption } = post.frontmatter;
        return (
          <SnippetCard
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
