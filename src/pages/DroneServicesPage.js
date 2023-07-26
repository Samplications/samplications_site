import React from 'react'

import styles from "../styles/DroneServicePageStyle.module.css"

import ContactForm from "../components/ContactForm"

const DroneServicesPage = () => {
  return (
    <div>
        <div class="pageContent">
            <h2>Your air support</h2>
                <p>At the moment we are working very hard to provide these services.<br/>
                    However so far we can only offer basic video work with a DJI maverick and an FPV drone for events, showcasing buildings and roof inspections.
                  
                   If in doubt, do not hesitate to reach out anyway so we can see what we can mean for you.
                </p>
                <br/>
                <div class={styles.container}>
                  <div class={styles.videoContainer}>
                  <iframe class={styles.responsiveIframe} src="https://www.youtube.com/embed/gRLqGDFms9c" title="Playing in golden hour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                </div>
                <br/>

          <ContactForm/>
        </div>
    </div>
  )
}

export default DroneServicesPage
