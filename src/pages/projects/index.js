import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function projects() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h1>Projects Page</h1>
                <h3>These are some recent projects I've created</h3>
            </div>
        </Layout>
    )
}
