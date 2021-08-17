import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function home({ data }) {
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
      <Layout>
          <section className={styles.header}>
            <div>
              <h2>Welcome to my portfolio</h2>
              <h3>Design & Development</h3>
              <p>My name is Albin Lagerquist & I am cool.</p>
              <Link className={styles.btn} to="/projects">My Projects</Link>
            </div>
            <GatsbyImage image={image} alt="Logo" />
          </section>
      </Layout>
  )
}

export const query = graphql`
  query Logo {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          placeholder: BLURRED,
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`