import React from 'react'
import { Link } from 'react-router-dom';

import styles from "../styles/MainMenuBarStyle.module.css"

import drone from "../assets/drone.webp"
import code from "../assets/code.webp"
import satellite from "../assets/spacecraft.webp"
import electronics from "../assets/electronics.webp"

const MainMenuBar = () => {
  return (
    <div class={styles.menuContainer}>
        
            <div class={styles.menuItem}>
                <Link to='/WebAppDev'>
                    <div class={styles.links}>
                    <img class={styles.image} src={code} alt="Website/app development"/>
                    <span class={styles.span}>Website/app<br/>development</span>
                    </div>
                </Link>
            </div>

        
            <div class={styles.menuItem}>
            <Link to='/DroneServices'>
            <div class={styles.links}>
                <img class={styles.image} src={drone} alt="Drone services"/>
                <span class={styles.span}>Drones services</span>
                </div>
                </Link>
            </div>
        
            <div class={styles.menuItem}>
            <Link to='/CustomSolutions'>
            <div class={styles.links}>
                <img class={styles.image} src={electronics} alt="Custom hard- and software solutions"/>
                <span class={styles.span}>Custom hard- and<br/>software solutions</span>
                </div>
                </Link>
            </div>
        
            <div class={styles.menuItem}>
            <Link to='/SpacecraftConsulting'>
            <div class={styles.links}>
                <img class={styles.image} src={satellite} alt="Satellite operations consulting"/>
                <span class={styles.span}>Spacecraft operations<br/>consulting</span>
                </div>
                </Link>
            </div>
        
    </div>
  )
}

export default MainMenuBar

