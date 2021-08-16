import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function home() {
    return (
        <Layout>
            <section className={styles.header}>
              <div>
                <h2>Welcome to my portfolio</h2>
                <h3>Design & Development</h3>
                <p>My name is Albin Lagerquist & I am cool.</p>
                <Link className={styles.btn} to="/projects">My Projects</Link>
              </div>
            </section>
        </Layout>
  )
}
