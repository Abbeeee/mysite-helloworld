const path = require(`path`)

async function createProjectPages (graphql, actions, reporter) {
    const {createPage} = actions
    const result = await graphql(`
        query CreatePages {
          allSanityProject(filter: { slug: { current: { ne: null } } }) {
            edges {
              node {
                id
                slug {
                  current
                }
              }
            }
          }
        }
    `)

    if (result.errors) {
      throw result.errors
    }

    const projectEdges = (result.data.allSanityProject || {}).edges || []

    projectEdges.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/project/${slug}/`

      reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/project-details.js'),
        context: { id }
      })
    })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProjectPages(graphql, actions, reporter)
}