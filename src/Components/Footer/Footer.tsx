import styles from "./Footer.module.css";
import Wave from "./Wave/Wave";
import logo from "../../Assets/logo.svg";

import SocialMedia from "../SocialMedia/SocialMedia";

function Footer(props: { path: string }) {
  return (
    <>
      <Wave />
      <div className={styles.infos}>
        <div className={styles["logo-wrapper"]}>
          <img className={styles.logo} src={logo} alt="Logo Website" />
        </div>
        <div className={styles["about-page"]}>
          <p className={styles.title}>About this Website</p>
          The first purpose of this website is for me to learn react and
          express. And the second one, is to share information that I want to
          share. If you want to see the code for this website, here is the 
          source code:
          <p className={styles.subtitle}>Source Code for the Frontend:</p>
          <a
            href="https://github.com/FadhilAF/personal-website"
            target="_blank"
          >
            https://github.com/FadhilAF/personal-website
          </a>
          <p className={styles.subtitle}>Source Code for the Backend:</p>
          <a
            href="https://github.com/FadhilAF/personal-website-backend"
            target="_blank"
          >
            https://github.com/FadhilAF/personal-website-backend
          </a>
        </div>
        <div className={styles["about-me"]}>
          <p className={styles.title}>Personal Info</p>
          My full name is Muhammad Fadhil Al-Fatih. From Palembang, South Sumatra,
          Indonesia. For now, (currently year 2022) I'm a student at Sriwijaya
          University studying Informatics. At the first time when I go to
          University, I'd like to become a data scientist. For now I'm studying
          React and Express, I'd like to learn about java deeper, at a second
          thought learning Software Engineering is interesting too.
          <p className={styles.subtitle}>
            You could also see my social media below:
          </p>
          <SocialMedia />        
        </div>
      </div>
    </>
  );
}

export default Footer;
