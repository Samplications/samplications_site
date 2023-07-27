import React from 'react';
import emailjs from '@emailjs/browser';

import styles from "../styles/ContactFormStyle.module.css"

const ContactForm = () => {

 const sendEmail = (e) => {
  
  e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_65d01zl', 'template_uqol1mj', e.target, 'kOvmC5bVWZLywIJxx')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         console.log(error);
     });
     e.target.reset();
     window.alert("Thank you for reaching out. Your message has been sent. We will get back to you as soon as possible");
 };

  return (
    <div>
      <div class={styles.contactForm}>
        <div>
          <h2>Contact us</h2>
          <p>Curious if we can be helpful to you? Get in touch now or send an email to samplications@gmail.com!</p>

          <br/>
          <p>We will get back to you as soon as possible.</p>
        </div>
                <form class={styles.form} onSubmit={sendEmail}>
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
