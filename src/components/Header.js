import React from 'react'
import {BrowserView} from 'react-device-detect';
import { Link } from 'react-router-dom';

import styles from '../styles/HeaderStyle.module.css'
import logo from '../assets/SamplicationsLogo_Focus.webp' //SamplicationsLogo_Focus.png'

const Header = () => {
  return (
    <div>
      <Link to="/">
        <div class={styles.headerContent}>
          <BrowserView>
          <img class={styles.logo} src={logo} alt="Samplications Logo"/>
          </BrowserView>
          <div class={styles.typewriter}>
            <h1>Samplications</h1>
          </div>
          
        </div>
      </Link>
    </div>
  )
}

export default Header
