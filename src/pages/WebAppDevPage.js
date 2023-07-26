import React, {useState} from 'react'
import {BrowserView, MobileView} from 'react-device-detect';

import styles from '../styles/WebAppDevPageStyle.module.css'

import ContactForm from '../components/ContactForm'

const WebAppDevPage = () => {
  
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  
  
  return (
    <div>
        <div class="pageContent">
        <h2>Create the website of your dreams</h2>
            <p>Are you looking to establish a strong online presence for your brand or business? Look no further! We are experts in web development and Android application development, dedicated to creating exceptional custom websites and mobile apps tailored to your unique needs. At Samplications, we understand that your online presence goes beyond just web platforms. We also recognize the significance of Android applications as powerful tools that showcase your brand, engage your audience, and drive business growth.
              Whether you need an impressive website, a user-friendly Android app, or both, our expertise ensures that your digital storefront and your Android application reflect the essence of your brand and deliver a seamless user experience.
              Get in touch with us today, and let's embark on a journey to elevate your brand's online presence through cutting-edge web and Android application development!
            </p>
            <br/>

            <h3>What do we provide?</h3>

            <div class={styles.cardholder}>
              
              <div class={styles.cardrow}>
                <div class={styles.card}>
                  <div class={styles.cardInner}>
                    <div class={styles.cardFront}>
                      <p>Tailor made solutions</p>
                    </div>
                    <div class={styles.cardBack}>
                      <p>We don't believe in one-size-fits-all solutions. Our approach is centered around you and your business. We take the time to understand your goals, target audience, and preferences to create a website that reflects your vision perfectly.</p>
                    </div>
                  </div>
                </div>

                <div class={styles.card}>
                  <div class={styles.cardInner}>
                    <div class={styles.cardFront}>
                      <p>Experienced Professionals</p>
                    </div>
                    <div class={styles.cardBack}>
                      <p>Our team is comprised of highly skilled web developers and designers with years of experience under their belts. They stay up-to-date with the latest industry trends and technologies to ensure your website is cutting-edge and future-proof.</p>
                    </div>
                  </div>
                </div>

                <div class={styles.card}>
                  <div class={styles.cardInner}>
                    <div class={styles.cardFront}>
                      <p>User-Centric Designs</p>
                    </div>
                    <div class={styles.cardBack}>
                      <p>A visually stunning website is crucial, but usability is equally important. Our designs are not only aesthetically pleasing but also intuitive and user-friendly, ensuring that your visitors have a seamless and enjoyable experience.</p>
                    </div>
                  </div>
                </div>

                <div class={styles.card}>
                  <div class={styles.cardInner}>
                    <div class={styles.cardFront}>
                      <p>Mobile Responsiveness</p>
                    </div>
                    <div class={styles.cardBack}>
                      <p>In this mobile-first era, having a website that adapts flawlessly to various devices is paramount. We prioritize mobile responsiveness to guarantee that your website looks and functions impeccably on smartphones, tablets, and desktops alike.</p>
                    </div>
                  </div>
                </div>

                <div class={styles.card}>
                  <div class={styles.cardInner}>
                    <div class={styles.cardFront}>
                      <p>SEO Optimization</p>
                    </div>
                    <div class={styles.cardBack}>
                      <p>Building a fantastic website is just the beginning, getting it noticed is the key to success. Our websites are developed with SEO best practices in mind, helping you climb the search engine ranks and attract organic traffic.</p>
                    </div>
                  </div>
                </div>

                <div class={styles.card}>
                  <div class={styles.cardInner}>
                    <div class={styles.cardFront}>
                      <p>Reliable Support</p>
                    </div>
                    <div class={styles.cardBack}>
                      <p>We value long-term relationships with our clients. Even after your website is up and running, we offer ongoing support, maintenance, and updates to ensure everything runs smoothly.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <br/>
          <h3>Our process</h3>
          <div>
          <BrowserView>
          <div class={styles.processCards}>

            {isShown5 && (
                  <div class={styles.processCard5}>
                    <div class={styles.cardContent}>
                      <h4>5. Ongoing Support</h4>
                      <p>Our support doesn't end at launch. We are here to assist you with any updates, improvements, or technical issues that may arise as your business evolves.</p>
                    </div>
                  </div>
              )}
            
              {isShown4 && (
                  <div class={styles.processCard3} onMouseEnter={() => setIsShown5(true)}>
                    <div class={styles.cardContent}>
                      <h4>4. Launch & Optimization</h4>
                      <p>After your approval, we launch your website and monitor its performance closely. We make any necessary tweaks and optimizations to maximize its effectiveness.</p>
                    </div>
                  </div>
              )}

              {isShown3 && (
                  <div class={styles.processCard2} onMouseEnter={() => setIsShown4(true)}>
                    <div class={styles.cardContent}>
                      <h4>3. Development & Testing</h4>
                      <p>With the design approved, we get to work, building your website from scratch with clean and efficient code. Rigorous testing is conducted at every stage to ensure a bug-free and seamless user experience.</p>
                    </div>
                  </div>
              )}

              {isShown2 && (
                  <div class={styles.processCard1} onMouseEnter={() => setIsShown3(true)}>
                    <div class={styles.cardContent}>
                      <h4>2. Planning & Design</h4>
                      <p>Once we gain a clear understanding of your requirements, we proceed to create a captivating design and user experience that perfectly aligns with your brand identity.</p>
                    </div>
                  </div>
              )}

              <div class={styles.processCard4} onMouseEnter={() => setIsShown2(true)}>
                <div class={styles.cardContent}>
                    <h4>1. Discovery Phase</h4>
                    <p>We commence every project with an in-depth discussion to understand your business, goals, and specific requirements. This is where we lay the foundation for a successful website.</p>
                </div>
              </div>
          </div>
          </BrowserView>
          <MobileView>
          <div class={styles.processCards}>

              <div class={styles.processCard4} onMouseEnter={() => setIsShown2(true)}>
                <div class={styles.cardContent}>
                    <h4>1. Discovery Phase</h4>
                    <p>We commence every project with an in-depth discussion to understand your business, goals, and specific requirements. This is where we lay the foundation for a successful website.</p>
                </div>
              </div>

              {isShown2 && (
                  <div class={styles.processCard1} onMouseEnter={() => setIsShown3(true)}>
                    <div class={styles.cardContent}>
                      <h4>2. Planning & Design</h4>
                      <p>Once we have a clear picture, our creative team works on crafting a captivating design and user experience that aligns with your brand identity.</p>
                    </div>
                  </div>
              )}

              {isShown3 && (
                  <div class={styles.processCard2} onMouseEnter={() => setIsShown4(true)}>
                    <div class={styles.cardContent}>
                      <h4>3. Development & Testing</h4>
                      <p>With the design approved, our development team gets to work, building your website from scratch with clean and efficient code. Rigorous testing is conducted at every stage to ensure a bug-free and seamless user experience.</p>
                    </div>
                  </div>
              )}

              {isShown4 && (
                  <div class={styles.processCard3} onMouseEnter={() => setIsShown5(true)}>
                    <div class={styles.cardContent}>
                      <h4>4. Launch & Optimization</h4>
                      <p>After your approval, we launch your website and monitor its performance closely. We make any necessary tweaks and optimizations to maximize its effectiveness.</p>
                    </div>
                  </div>
              )}

              {isShown5 && (
                  <div class={styles.processCard5}>
                    <div class={styles.cardContent}>
                      <h4>5. Ongoing Support</h4>
                      <p>Our support doesn't end at launch. We are here to assist you with any updates, improvements, or technical issues that may arise as your business evolves.</p>
                    </div>
                  </div>
              )}

          </div>
          </MobileView>

          </div>
            <ContactForm/>
        </div>
    </div>
  )
}

export default WebAppDevPage
