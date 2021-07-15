export const fileConfig = `
{
  resolve: \`gatsby-source-filesystem\`,
  options: {
    path: \`\${__dirname}/blog\`,
    name: "blog",
  },
},
{
  resolve: \`gatsby-source-filesystem\`,
  options: {
    path: \`\${__dirname}/projects\`,
    name: "projects",
  },
},
`

export const mdxConfig = `
{
  resolve: \`gatsby-plugin-mdx\`,
  options: {
    gatsbyRemarkPlugins: [ \`gatsby-remark-autolink-headers\` ],
    plugins: [ \`gatsby-remark-autolink-headers\` ],
  },
},
`

export const babelConfig = `
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic'
    }
  })
}
`

export const pageConfig = `
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Reusable function to find MDX files in the /projects or /blog path
  const getMdxData = async (type) => {
    return graphql(\`
      {
        allMdx(
          filter: {fileAbsolutePath: {regex: "/\${type}/"}}
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
    \`)
  }
  const projectsData = await getMdxData("projects");
  // Handle errors
  if (projectsData.errors) {
    reporter.panicOnBuild("Error while running GraphQL query for MDX data.")
    return
  }
  const ProjectLayout = path.resolve("src/components/projects/ProjectLayout.tsx");
  // Create project pages.
  const projects = projectsData.data.allMdx.edges;
  projects.forEach((post, index) => {
    const previous =
      index === projects.length - 1
        ? null
        : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;
    createPage({
      path: \`/projects/\${(post.node.frontmatter.title).replace(/\s+/g, '-').toLowerCase()}\`,
      component: ProjectLayout,
      context: {
        title: post.node.frontmatter.title,
        body: post.node.body,
        previous,
        next,
      },
    });
  });
};
`

export const rssConfig = `{
  resolve: \`gatsby-plugin-feed\`,
  options: {
    query: \`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }
    \`,
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map(edge => {
            const path = edge.node.fileAbsolutePath.split("/")
            const indexOfSlug = path.indexOf(edge.node.slug.replace("/",""));
            const parent = path[indexOfSlug - 1];
            return Object.assign({}, edge.node.frontmatter, {
              url: site.siteMetadata.siteUrl + \`/\${parent}/\` + edge.node.slug,
              guid: site.siteMetadata.siteUrl + \`/\${parent}/\` + edge.node.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }],
            });
          });
        },
        query: \`
        {
          allMdx(limit: 1000) {
            edges {
              node {
                frontmatter {
                  title
                }
                html
                slug
                fileAbsolutePath
              }
            }
          }
        }
        \`,
        output: '/rss.xml',
        title: \`alexoser.com RSS Feed\`,
      },
    ],
  },
},`;