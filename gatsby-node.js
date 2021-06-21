exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const ProjectPage = `${__dirname}/src/components/projects/ProjectPage.tsx`;

    resolve(
      graphql(
        `
          {
            allMdx(
              filter: {fileAbsolutePath: {regex: "/projects/"}}
              sort: {fields: [frontmatter___title], order: DESC}
            ) {
              edges {
                node {
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
          return;
        }

        // Create project pages.
        const posts = result.data.allMdx.edges;
        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1
              ? null
              : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: `/projects/${(post.node.frontmatter.title).toLowerCase()}`,
            component: ProjectPage,
            context: {
              title: post.node.frontmatter.title,
              previous,
              next,
            },
          });
        });
      })
    );
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