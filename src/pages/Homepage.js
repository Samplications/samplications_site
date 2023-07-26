import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';

import styles from '../styles/HomepageStyle.module.css'

import ContactForm from '../components/ContactForm'

import bigDrone from '../assets/bigdrone.webp'
import codePic from '../assets/code_portrait.webp'
import hardwarePic from '../assets/hardware_shopped.webp'
import satellitePic from '../assets/satellite.webp'

const Homepage = () => {
  return (
    <div>

        <div class="pageContent">
            <h2>Welcome to Samplications</h2>
            <p>At Samplications, we are passionate about pushing the boundaries of technology and innovation to create cutting-edge solutions for our clients. We are a dynamic and forward-thinking consulting firm, specializing in a wide range of services that cater to various industries. Our diverse expertise allows us to meet the unique needs of our clients, delivering unparalleled results that drive growth and success.
            </p>
            <br/>

          <div class={styles.overviewList}>

          <div class={styles.overviewListItem}>
              
              <div class={styles.listItemImage}>
              <a href="/WebAppDev"><img src={codePic} alt="code"/></a>
              </div>

              <div class={styles.listItemContent}>
                <h3>Website and Android App Development</h3>
                <p>In this digital age, having a strong online presence is vital for any business. Our skilled team of developers excels in crafting responsive and user-friendly websites and Android applications that captivate audiences and elevate brands. Whether you need a simple website or a complex e-commerce platform, we have the expertise to bring your vision to life.</p>
                <a href="/WebAppDev"><p>Find out more... </p></a>
                <br/>
              </div>
            </div>

            <BrowserView>
            <div class={styles.overviewListItem}>

              <div class={styles.listItemContent}>
              <h3>Drone Services</h3>
                <p>Unmanned aerial vehicles (UAVs) have revolutionized various industries, from aerial photography and surveying to agricultural monitoring and infrastructure inspections. Our drone services provide actionable data and insights, enabling smarter decision-making and increased efficiency for your projects.</p>
                <a href="/DroneServices"><p>Find out more... </p></a>
                <br/>
              </div>
              
                <div class={styles.listItemImage}>
                <a href="/DroneServices"><img src={bigDrone} alt="big drone"/></a>
                </div>
            </div>              
            </BrowserView>
            <MobileView>
            <div class={styles.overviewListItem}>
            <div class={styles.listItemImage}>
                <a href="/DroneServices"><img src={bigDrone} alt="big drone"/></a>
                </div>

              <div class={styles.listItemContent}>
              <h3>Drone Services</h3>
                <p>Unmanned Aerial Vehicles (UAVs) have revolutionized various industries, from aerial photography and surveying to agricultural monitoring and infrastructure inspections. Our drone services provide actionable data and insights, enabling smarter decision-making and increased efficiency for your projects.</p>
                <a href="/DroneServices"><p>Find out more... </p></a>
                <br/>
              </div>
              
                
            </div>              
            </MobileView>

            <div class={styles.overviewListItem}>
              
              <div class={styles.listItemImage}>
              <a href="/CustomSolutions"><img src={hardwarePic} alt="Electronics"/></a>
              </div>

              <div class={styles.listItemContent}>
                <h3>Custom Hard- and Software Solutions</h3>
                <p>We understand that off-the-shelf solutions may not always align perfectly with your business requirements. That's why our experts thrive in developing tailor-made hardware and software solutions that are precisely engineered to meet your specific needs, ensuring seamless integration and enhanced performance.</p>
                <a href="/CustomSolutions"><p>Find out more... </p></a>
                <br/>
              </div>
            </div>


            <BrowserView>
            <div class={styles.overviewListItem}>

              <div class={styles.listItemContent}>
                <h3>Spacecraft Operations Consulting</h3>
                  <p>Venturing into space exploration requires meticulous planning and precise execution. Our spacecraft operations consulting services offer invaluable guidance and support to space missions, helping you navigate the complexities of space technology and operations successfully.</p>
                  <a href="/SpacecraftConsulting"><p>Find out more... </p></a>
                <br/>
              </div>

                <div class={styles.listItemImage}>
                <a href="/SpacecraftConsulting"><img src={satellitePic} alt="Satellite in orbit"/></a>
                </div>
            </div>
            </BrowserView>
            <MobileView>
            <div class={styles.overviewListItem}>
            <div class={styles.listItemImage}>
                <a href="/SpacecraftConsulting"><img src={satellitePic} alt="Satellite in orbit"/></a>
                </div>

              <div class={styles.listItemContent}>
                <h3>Spacecraft Operations Consulting</h3>
                  <p>Venturing into space exploration requires meticulous planning and precise execution. Our spacecraft operations consulting services offer invaluable guidance and support to space missions, helping you navigate the complexities of space technology and operations successfully.</p>
                  <a href="/SpacecraftConsulting"><p>Find out more... </p></a>
                <br/>
              </div>

                
              </div>
            </MobileView>

          </div>

          {/* <h3>Website and Android App Development</h3>
              <p>In this digital age, having a strong online presence is vital for any business. Our skilled team of developers excels in crafting responsive and user-friendly websites and Android applications that captivate audiences and elevate brands. Whether you need a simple website or a complex e-commerce platform, we have the expertise to bring your vision to life.</p>
              <a href="/WebAppDev"><p>Find out more... </p></a>

            <h3>Drone Services</h3>
            <p>Unmanned aerial vehicles (UAVs) have revolutionized various industries, from aerial photography and surveying to agricultural monitoring and infrastructure inspections. Our drone services provide actionable data and insights, enabling smarter decision-making and increased efficiency for your projects.</p>
            <a href="/DroneServices"><p>Find out more... </p></a>
            <br/>

            <h3>Custom Hard- and Software Solutions</h3>
            <p>We understand that off-the-shelf solutions may not always align perfectly with your business requirements. That's why our experts thrive in developing tailor-made hardware and software solutions that are precisely engineered to meet your specific needs, ensuring seamless integration and enhanced performance.</p>
            <a href="/CustomSolutions"><p>Find out more... </p></a>
            <br/>

            <h3>Spacecraft Operations Consulting</h3>
            <p>Venturing into space exploration requires meticulous planning and precise execution. Our spacecraft operations consulting services offer invaluable guidance and support to space missions, helping you navigate the complexities of space technology and operations successfully.</p>
            <a href="/SpacecraftConsulting"><p>Find out more... </p></a>
            <br/> */}

            <h2>Why choose us?</h2>
            <div class={styles.chooseUs}>
              <h3>1. Expertise and Experience</h3>
              <p>Our team comprises skilled professionals with extensive experience in their respective domains. We stay up-to-date with the latest industry trends and best practices to deliver solutions that are at the forefront of technology.</p>
              <br/>

              <h3>2. Client-Centric Approach</h3>
              <p>We place our clients at the core of everything we do. By understanding your unique challenges and goals, we tailor our services to align with your vision, ensuring maximum impact and value for your investment.</p>
              <br/>

              <h3>3. Innovative Solutions</h3>
              <p>Innovation is the driving force behind our success. We continuously seek novel approaches and cutting-edge technologies to create solutions that provide a competitive edge to your business.</p>
              <br/>

              <h3>4. Reliability and Quality</h3>
              <p>We are committed to delivering exceptional results that exceed expectations. Our rigorous quality assurance processes ensure that every project is executed flawlessly, adhering to the highest standards of quality and reliability.</p>
              <br/>

              <h3>5. Collaborative Partnership</h3>
              <p>We believe in fostering strong, long-lasting relationships with our clients. As your trusted partner, we are dedicated to your success and growth, providing ongoing support and guidance throughout your journey.</p>
              <br/>

            </div>

            
            <ContactForm/>
            
        </div>
    </div>
  )
}

export default Homepage
