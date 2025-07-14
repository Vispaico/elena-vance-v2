// src/pages/contact.js
import * as React from "react"
import Layout from "../components/layout.js"
import * as styles from "../styles/contact.module.css"

const ContactPage = () => {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h1>Get in Touch</h1>
        <p>
          I'm currently available for freelance projects, collaborations, and commissions.
          If you have a project in mind, or just want to say hello, I'd love to hear from you.
        </p>
        <div className={styles.emailBox}>
          <a href="mailto:hello@elenavance.com">
            hello@elenavance.com
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
export const Head = () => <title>Contact | Elena Vance Photography</title>