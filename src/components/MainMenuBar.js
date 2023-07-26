import React from 'react'

import styles from "../styles/MainMenuBarStyle.module.css"

import drone from "../assets/drone.webp"
import code from "../assets/code.webp"
import satellite from "../assets/spacecraft.webp"
import electronics from "../assets/electronics.webp"

const MainMenuBar = () => {
  return (
    <div class={styles.menuContainer}>
        
            <div class={styles.menuItem}>
                <a class={styles.links} href='/WebAppDev'>
                    <img class={styles.image} src={code} alt="Website/app development"/>
                    <span class={styles.span}>Website/app<br/>development</span>
                </a>
            </div>

        
            <div class={styles.menuItem}>
            <a class={styles.links} href='/DroneServices'>
                <img class={styles.image} src={drone} alt="Drone services"/>
                <span class={styles.span}>Drones services</span>
                </a>
            </div>
        
            <div class={styles.menuItem}>
            <a class={styles.links} href='/CustomSolutions'>
                <img class={styles.image} src={electronics} alt="Custom hard- and software solutions"/>
                <span class={styles.span}>Custom hard- and<br/>software solutions</span>
                </a>
            </div>
        
            <div class={styles.menuItem}>
            <a class={styles.links} href='/SpacecraftConsulting'>
                <img class={styles.image} src={satellite} alt="Satellite operations consulting"/>
                <span class={styles.span}>Spacecraft operations<br/>consulting</span>
                </a>
            </div>
        
    </div>
  )
}

export default MainMenuBar

