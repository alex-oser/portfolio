const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const getMdxData = async (type) => {
    return graphql(
      `
        {
          allMdx(
            filter: {internal: {contentFilePath: {regex: "/${type}/"}}}
            sort: {fields: [frontmatter___title], order: DESC}
          ) {
            edges {
              node {
                internal {
                  contentFilePath
                }
                frontmatter {
                  title
                  date
                }
                body
              }
            }
          }
        }
      `
    )
  }

  const projectsData = await getMdxData("projects");
  const snippetsData = await getMdxData("snippets");
  const blogData = await getMdxData("blog");

  // Handle errors
  if (projectsData.errors || blogData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for MDX data.`)
    return
  }

  const ProjectLayout = path.resolve("src/components/projects/ProjectLayout.tsx");
  const SnippetLayout = path.resolve("src/components/snippets/SnippetLayout.tsx");
  const BlogLayout = path.resolve("src/components/blog/BlogLayout.tsx");

  // Create project pages.
  const projects = projectsData.data.allMdx.edges;
  projects.forEach((post, index) => {
    const previous =
      index === projects.length - 1
        ? null
        : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    const pageName = (post.node.frontmatter.title).replace(/\s+/g, '-').toLowerCase();

    createPage({
      path: `/projects/${pageName}`,
      component: `${ProjectLayout}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        title: post.node.frontmatter.title,
        body: post.node.body,
        previous,
        next,
      },
    });
  });

  // Create snippet pages.
  const snippets = snippetsData.data.allMdx.edges;
  snippets.forEach((post, index) => {
    const previous =
      index === snippets.length - 1
        ? null
        : snippets[index + 1].node;
    const next = index === 0 ? null : snippets[index - 1].node;

    const pageName = (post.node.frontmatter.title).replace(/\s+/g, '-').toLowerCase();

    createPage({
      path: `/snippets/${pageName}`,
      component: `${SnippetLayout}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        title: post.node.frontmatter.title,
        body: post.node.body,
        previous,
        next,
      },
    });
  });
  
  // // Create blog pages.
  // const blogPosts = blogData.data.allMdx.edges;
  // blogPosts.forEach((post, index) => {
  //   const previous =
  //     index === blogPosts.length - 1
  //       ? null
  //       : blogPosts[index + 1].node;
  //   const next = index === 0 ? null : blogPosts[index - 1].node;

  //   createPage({
  //     path: `/blog/${(post.node.frontmatter.title).replace(/\s+/g, '-').toLowerCase()}`,
  //     component: BlogLayout,
  //     context: {
  //       title: post.node.frontmatter.title,
  //       body: post.node.body,
  //       date: post.node.frontmatter.date,
  //       previous,
  //       next,
  //     },
  //   });
  // });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic'
    }
  })
}