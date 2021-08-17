import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function about() {
    return (
        <Layout>
            <div className={styles.about}>
                <h1>About Page</h1>
            </div>
        </Layout>
    )
}
