const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const getMdxData = async (type) => {
    return graphql(
      `
        {
          allMdx(
            filter: {fileAbsolutePath: {regex: "/${type}/"}}
            sort: {fields: [frontmatter___title], order: DESC}
          ) {
            edges {
              node {
                frontmatter {
                  title
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
  const blogData = await getMdxData("blog");

  // Handle errors
  if (projectsData.errors || blogData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for MDX data.`)
    return
  }

  const ProjectPage = path.resolve("src/components/projects/ProjectPage.tsx");
  const BlogPage = path.resolve("src/components/blog/BlogPage.tsx");

  // Create project pages.
  const projects = projectsData.data.allMdx.edges;
  projects.forEach((post, index) => {
    const previous =
      index === projects.length - 1
        ? null
        : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: `/projects/${(post.node.frontmatter.title).replace(/\s+/g, '-').toLowerCase()}`,
      component: ProjectPage,
      context: {
        title: post.node.frontmatter.title,
        body: post.node.body,
        previous,
        next,
      },
    });
  });
  
  // Create blog pages.
  const blogPosts = blogData.data.allMdx.edges;
  blogPosts.forEach((post, index) => {
    const previous =
      index === blogPosts.length - 1
        ? null
        : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;

    createPage({
      path: `/blog/${(post.node.frontmatter.title).replace(/\s+/g, '-').toLowerCase()}`,
      component: BlogPage,
      context: {
        title: post.node.frontmatter.title,
        previous,
        next,
      },
    });
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic'
    }
  })
}