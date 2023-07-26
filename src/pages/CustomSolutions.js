import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';

import ContactForm from '../components/ContactForm'

import styles from "../styles/CustomSolutionsStyle.module.css"

import hardwarePic from "../assets/hardware2.webp"
import computerPic from "../assets/computer.webp"
import prototypePic from "../assets/prototype.webp"

const CustomSolutions = () => {
  return (
    <div>
        <div class="pageContent">

        <div class={styles.content}>
            <div class={styles.text}>
            <h2>Custom Software and hardware solutions</h2>
                <p>Understanding the unique challenges and intricacies that organizations face, we are dedicated to creating tailor-made solutions that perfectly align with your specific requirements. When off-the-shelf solutions fall short, our team of experts steps in to design and develop cutting-edge solutions that not only meet your needs but also exceed your expectations.
                    <br/>
                    With a wide variety of programming languages (Python, Java, C/C++, linux/bash) to offer we make sure every solution we provides fits the requirement of  your project.
                    Add our capabilities with electronics into the mix and we can not only provide software but also hardware solutions. 
                    <br/>
                    <br/>Want to build a prototype of some sort? We got you covered! Or a complex software package perhaps? No problem! With our expertise you don't have to worry about all of that.
                    <br/>
                  </p>
              </div>
              
          <br/>

          <div class={styles.text}>
            <h2>Why Choose Custom Solutions?</h2>
            <p><span class="bold">1. Precision Engineering:</span> Our approach to custom solutions revolves around precision engineering. We delve deep into understanding your processes, workflows, and objectives, ensuring that every aspect of the hardware or software is meticulously designed to integrate seamlessly with your existing infrastructure.</p>
            <p><span class="bold">2. Enhanced Performance:</span> Generic solutions often come with unnecessary complexities or lack vital features that your business truly needs. With our custom approach, we eliminate unnecessary elements and focus solely on enhancing the performance and efficiency of your systems.</p>
            <p><span class="bold">3. Scalability and Flexibility:</span> As your business evolves, so should your technology. Our custom solutions are built to be scalable and flexible, ensuring they can adapt and grow with your organization, saving you from future headaches and expenses.</p>
          </div>
          <br/>
          <BrowserView>
              <div class={styles.imageHolder}>
                <img src={hardwarePic} alt="breadboard and cables"/>
                <img src={computerPic} alt="computer vague in the background"/>
                <img src={prototypePic} alt="Flashing prototype board"/>
              </div>
              </BrowserView>
              <MobileView>
              <div class={styles.imageHolder}>
                <img src={hardwarePic} alt="breadboard and cables"/>
              </div>
              </MobileView>

        </div>
            <br/>
            <ContactForm/>
        </div>
    </div>
  )
}

export default CustomSolutions
