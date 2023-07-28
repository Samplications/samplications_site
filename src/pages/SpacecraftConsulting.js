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
            <p>We take immense pride in our expertise in Spacecraft Operations, providing top-notch consulting services to clients in the aerospace industry, even gaining international recognition in both projects we have been involved with. With a strong foundation of experience and skills, we are committed to optimizing spacecraft performance, ensuring seamless operations, and enabling groundbreaking missions that push the boundaries of space exploration.
              <br/>
              <br/>
              Working at the European Space Agency (ESA) as part of the Mission Control Team of <a href="https://www.esa.int/Enabling_Support/Operations/OPS-SAT" target='_blank'  rel="noreferrer">OPS-SAT</a>, a 3 unit cubesat, brought us to the forefront of innovation in the spacesector.
              It allowed us to not only get familiar with cubesat operations, it added value on top of it by bringing in all the knowledge from bigger missions that are being controlled from the European Satellite Control Center (ESOC) in Darmstadt.
              Additionally being involved with the experiments performed on the spacecraft did not only provide operational experience but also experience in the development of new and innovate technologies for cubesats.
              <br/>
              <br/>
              A summary of our duties and achievements were:
              <ul>
                <li>Operated the spacecraft</li>
                <li>Planned schedule for spacecraft</li>
                <li>Supported experimenters</li>
                <li>Designed and implemented numerous operational procedures</li>
                <li>Written numerous procedures in MATIS</li>
                <li>Created SDR and image processing pipelines to process relevant downloaded packages automatically</li>
                <li>Implemented device permissions in experimenter pipeline</li>
                <li>Enabled the team to get python libraries onboard such as numpy, pandas, opencv, ...</li>
                <li>Increased performance and efficiency of the camera:
                  <ul>
                    <li>Cleared a bug in the camera API producing Out-of-Memory Exceptions</li>
                    <li>Updating camera API onboard the spacecraft allowing the satellite to capture videos</li>
                    <li>Set up the video experiment</li>
                    <li>Increase the efficiency and speed of image acquisition API and related experiments onboard the spacecraft</li>
                    <li>Adjusted the color gains to create a more balanced raw image</li>
                    <li>Created custom contrast stretching script for image processing pipeline</li>
                  </ul>
                </li>
                <li>Implemented a downlink without bitlock system and expanded its infrastructure</li>
                <li>Created the magnetometer calibration script and performed in-orbit magnetometer calibrations</li>
                <li>Performed detumbling analysis comparing the fine pointing system with the coarse pointing system</li>
                <li>Created algorithms to calculate spacecraft attitude information based on telemetry</li>
                <li>Maintained the pipelines responsible for processing downloaded (experimental) packages</li>
                <li>Created and implemented the experiment to run the <a href="https://kelvins.esa.int/opssat/challenge/" target='_blank'  rel="noreferrer">Kelvins competition</a>, including writing a binary to patch images</li>
                <li>Updated the <a href="https://github.com/georgeslabreche/opssat-smartcam" target='_blank'  rel="noreferrer">smartcam experiment</a> to allow multiple image types</li>
                <li>Reconfigured collectd to be compatible with an overlay filesystem</li>
              </ul>
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
              <br/>
              Another project we are proud to be a part of is the <a href='https://www.uhasselt.be/oscar-qube' target='_blank' rel="noreferrer">OSCAR-QUBE</a>. The project aims to develop the next generation of magnetic field sensors based on NV-centers in diamond and quantum operating principles.
              This magnetometer was the first diamond based quantum magnetometer in brought into space and over the course of 8 months collected valuable data and proved the technology is getting ready for real world applications.
              Being involved from the start of the project has taught us invaluable lessons. Moreover as we were responsible for the operational aspect of the mission we defined the operational procedures and built the ground segment in order to interface with the device.
              <br/>
              <br/>
              A summary of our duties and achievements were:
              <ul>
                <li>Defined and created operational procedures for the mission</li>
                <li>Set up and configured the Yamcs Mission Control System (MCS) to be compatible with the mission</li>
                <li>Created and built a User Interface to interface with the MCS</li>
                <li>Performed interface tests</li>
                <li>Wrote firmware for test boards</li>
                <li>Was the main organiser of the QUBE return event + supported in additional management task</li>
              </ul>
              <br/>
              With both projects we got international recognition. Winning the <a href="https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/OPS-SAT_Flying_Laboratory_Wins_2023_International_SpaceOps_Award" target='_blank' rel="noreferrer">SpaceOps Award for Outstanding Achievement 2023</a> together with the Ingenuity team from NASA. The OSCAR-QUBE project was awarded the <a href='https://www.esa.int/Education/Orbit_Your_Thesis/Team_OSCAR-QUBE_awarded_the_Hans_von_Muldau_Team_Award_at_IAC' target='_blank' rel="noreferrer">Hans von Muldau team award 2021</a> on the International Astronautical Congress (IAC) in Dubai.
              Do you want to get some insight from all of this knowledge. Do not hesitate to reach out.
              <br/>          
              <br/>      
            </p>
            <br/>
            <ContactForm/>
        </div>
        
    </div>
  )
}

export default SpacecraftConsulting
