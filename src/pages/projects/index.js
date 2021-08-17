import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function projects({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h1>Projects Page</h1>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Logo" />
                                <h3>{ project.frontmatter.title }</h3>
                                <p>{ project.frontmatter.stack }</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Hit me up at: { contact }</p>
            </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
    query ProjectsPage {
      projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
              childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH,
                    placeholder: BLURRED,
                    formats: [AUTO, WEBP]
                )
              }
            }
          }
          id
        }
      }
      contact: site {
        siteMetadata {
          contact
        }
      }
    }
`
