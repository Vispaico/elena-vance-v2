// src/pages/contact.js
import * as React from "react"
import * as styles from "../styles/contact.module.css"

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Get in Touch</h1>
      <p>I'm currently available...</p>
      <div className={styles.emailBox}>
        <a href="mailto:hello@elenavance.com">
          hello@elenavance.com
        </a>
      </div>
    </div>
  )
}

export default ContactPage
export const Head = () => <title>Contact | Elena Vance Photography</title>