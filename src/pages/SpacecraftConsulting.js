import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';


import styles from "../styles/SatelliteConsultingStyle.module.css"

import ContactForm from "../components/ContactForm"

import interfacePic from "../assets/oscar_interface_test.webp"
import spaceappsPic from "../assets/SpaceApps.webp"
import esocPic from "../assets/ESA_control_room.webp"

const SpacecraftConsulting = () => {
  return (
    <div>
        <div class="pageContent">
        <h2>Spacecraft operations consulting</h2>
            <p>We take immense pride in our expertise in Spacecraft Operations, providing top-notch consulting services to clients in the aerospace industry. With a strong foundation of experience and skills, we are committed to optimizing spacecraft performance, ensuring seamless operations, and enabling groundbreaking missions that push the boundaries of space exploration.
              <br/>
              <br/>
              Working at the European Space Agency (ESA) as part of the Mission Control Team of <a href="https://www.esa.int/Enabling_Support/Operations/OPS-SAT" target='_blank'  rel="noreferrer">OPS-SAT</a>, a 3 unit cubesat, brought us to the forefront of innovation in the spacesector.
              It allowed us to not only get familiar with cubesat operations, it added value on top of it by bringing in all the knowledge from bigger missions that are being controlled from the European Satellite Control Center (ESOC) in Darmstadt.
              Additionally being involved with the experiments performed on the spacecraft did not only provide operational experience but also experience in the development of new and innovate technologies for cubesats.
              <br/>
              <br/>
              Another project we are proud  to be a part of is the <a href='https://www.uhasselt.be/oscar-qube' target='_blank' rel="noreferrer">OSCAR-QUBE</a>. The project aims to develop the next generation of magnetic field sensors based on NV-centers in diamond and quantum operating principles.
              This magnetometer was the first diamond based quantum magnetometer in brought into space and over the course of 8 months collected valuable data and proved the technology is getting ready for real world applications.
              Being involved from the start of the project has taught us invaluable lessons. Moreover as we were responsible for the operational aspect of the mission we defined the operational procedures and built the ground segment in order to interface with the device.
              <br/>
              <br/>
              Do you want to get some insight from all of this knowledge. Do not hesitate to reach out.
              <br/>
              <br/>
              <BrowserView>
              <div class={styles.imageHolder}>
                <img src={interfacePic} alt="OSCAR-QUBE interface tests"/>
                <img src={spaceappsPic} alt="OSCAR-QUBE space apps"/>
                <img src={esocPic} alt="ESA ESOC main control room"/>
              </div>
              </BrowserView>
              <MobileView>
              <div class={styles.imageHolder}>
                <img src={interfacePic} alt="OSCAR-QUBE interface tests"/>
              </div>
              </MobileView>
            </p>
            <br/>
            <ContactForm/>
        </div>
        
    </div>
  )
}

export default SpacecraftConsulting
