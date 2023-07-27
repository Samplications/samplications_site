import React from 'react'
import { Link } from 'react-router-dom';

import styles from "../styles/AppsPagestyle.module.css"

import scoreboardPic from "../assets/scoreboard.webp"
import bucketlistPic from "../assets/bucketlister.webp"
import mealpickerPic from "../assets/mealpicker.webp"
import pandapointsPic from "../assets/pandapoints.webp"
import goalreacherPic from "../assets/goalreacher.webp"
import tiktakPic from "../assets/tiktak.webp"
import heurecaPic from "../assets/heureca.webp"

const AppsPage = () => {
  return (
    <div class="pageContent">
      <div class={styles.container}>
        
        <Link to="/Apps/ScoreBoard">
        <div class={styles.card}>
            <img src={scoreboardPic} alt='scoreboard logo'/>
            <p>ScoreBoard</p>
        </div>
        </Link>

        <Link to="/Apps/BucketLister">
        <div class={styles.card}>
            <img src={bucketlistPic} alt='bucketlister logo'/>
            <p>BucketLister</p>
        </div>
        </Link>

        <Link to="/Apps/MealPicker">
        <div class={styles.card}>
            <img src={mealpickerPic} alt='mealpicker logo'/>
            <p>MealPicker</p>
        </div>
        </Link>

        <Link to="/Apps/PandaPointsTracker">
        <div class={styles.card}>
            <img src={pandapointsPic} alt='panda points tracker logo'/>
            <p>PandaPointsTracker</p>
        </div>
        </Link>

        <Link to="/Apps/GoalReacher">
        <div class={styles.card}>
            <img src={goalreacherPic} alt='goalreacher logo'/>
            <p>GoalReacher</p>
        </div>
        </Link>

        <Link to="/Apps/TikTak">
        <div class={styles.card}>
            <img src={tiktakPic} alt='tiktak logo'/>
            <p>TikTak</p>
        </div>
        </Link>

        <Link to="/Apps/Heureca">
        <div class={styles.card}>
            <img src={heurecaPic} alt='heureca logo'/>
            <p>Heureca</p>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default AppsPage
