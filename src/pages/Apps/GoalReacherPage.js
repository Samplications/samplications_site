import React from 'react'

import styles from "../../styles/AppPageStyle.module.css"

import goalreacherLogo from "../../assets/goalreacher.webp"

const GoalReacherPage = () => {
  return (
    <div class="pageContent">
      <div class={styles.content}>
      <div class={styles.topContent}>
          <div>
            <h2 class={styles.content_title}>GoalReacher</h2>
            <h2>About</h2>
            <p>To achieve big things in life, you have to take small steps towards your goal.<br/>
                <br/>
                This app helps you achieve your goals!<br/>
                It has a clean overview to keep track of all your life goals and with every goal you can sum up the steps you have to take in order to achieve the bigger goal.<br/>
                <br/>
                It will be a lot easier to have an overview on how to achieve your goals and we are not even speaking about the motivation you gain from seeing all the steps you have already taken.<br/>
                <br/>
                So what are you waiting for? Write down you goals and start pursuing them!!!</p>
            <p><strong>Interested? Check it out <a href="https://play.google.com/store/apps/details?id=com.bammens.samme.goalreacher">here</a></strong></p>
            <br/>
          </div>
          <img src={goalreacherLogo} alt='goalreacher logo'/>
        </div>

        <br/>
        <h2>Privacy policy</h2>
        <p>Sam Bammens built the GoalReacher app as an Ad Supported app. This SERVICE is provided by Sam Bammens at no cost and is intended for use as is.<br/>
            <br/>
            This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.<br/>
            <br/>
            If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.<br/>
            <br/>
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at GoalReacher unless otherwise defined in this Privacy Policy.<br/>
            <br/>
            <strong>Information Collection and Use</strong><br/>
            <br/>
            For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.<br/>
            <br/>
            The app does use third party services that may collect information used to identify you.<br/>
            <br/>
            Link to privacy policy of third party service providers used by the app<br/>
            <ul>
                <li><a href="https://policies.google.com/privacy">Google Play Services</a></li>
                <li><a href="https://support.google.com/admob/answer/6128543?hl=en">AdMob</a></li>
            </ul>

            <strong>Log Data</strong><br/>
            <br/>
            I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.<br/>
            <br/>
            <strong>Cookies</strong><br/>
            <br/>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.<br/>
            <br/>
            This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.<br/>
            <br/>
            <strong>Service Providers</strong><br/>
            <br/>
            I may employ third-party companies and individuals due to the following reasons:<br/>
            
            <ul>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
                <li>I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</li><br/>
            </ul>
            <strong>Security</strong><br/>
            <br/>
            I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.<br/>
            <br/>
            <strong>Links to Other Sites</strong><br/>
            <br/>
            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.<br/>
            <br/>
            <strong>Children’s Privacy</strong><br/>
            <br/>
            These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.<br/>
            <br/>
            <strong>Changes to This Privacy Policy</strong><br/>
            <br/>
            I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.<br/>
            <br/>
            <strong>Contact Us</strong><br/>
            <br/>
            If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at samplications@gmail.com.</p>
    </div>
    </div>
  )
}

export default GoalReacherPage
