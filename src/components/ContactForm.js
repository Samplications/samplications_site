import React from 'react'

import styles from "../styles/ContactFormStyle.module.css"

const ContactForm = () => {
  return (
    <div>
      <div class={styles.contactForm}>
        <div>
          <h2>Contact us</h2>
          <p>Curious if we can be helpful to you? Get in touch now or send an email to samplications@gmail.com!</p>

          <br/>
          <p>We will get back to you as soon as possible.</p>
        </div>
                <form class={styles.form} action="mailto:samplications@gmail.com" method="post" enctype="text/plain">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder='Type your name here...' required/>

                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder='Type your email adress here...' required/>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="8" placeholder='Type message or question here...' required></textarea>

                    <button type="submit">Send Email</button>
                </form>
            </div>
    </div>
  )
}

export default ContactForm
