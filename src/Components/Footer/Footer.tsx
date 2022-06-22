import styles from "./Footer.module.css";
import Wave from "./Wave/Wave";
import logo from "../../Assets/logo.svg";
import facebookLogo from "../../Assets/facebook.svg";
import twitterLogo from "../../Assets/twitter.svg";
import instagramLogo from "../../Assets/instagram.svg";
import githubLogo from "../../Assets/github.svg";
import linkedinLogo from "../../Assets/linkedin.svg";

function Footer(props: { path: string }) {
  return (
    <>
      <Wave />
      <div className={styles.infos}>
        <img className={styles.logo} src={logo} alt="Logo Website" />
        <div className={styles["about-page"]}>
          <p className={styles.title}>About this Website</p>
          The first purpose of this website is for me to learn react and
          express. And the second one, is to share information that I want to
          share. Lastly, to give authentication to some special people. If you
          want to see the code for this website, here is the source code:
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
          My full name is Muhammad Fadhil Al-Fatih, born in the 23rd October
          2003. For now, (currently year 2022) I'm a student at Sriwijaya
          University studying Informatics. At the first time when I go to
          University, I'd like to become a data scientist. For now I'm studying
          React and Express, I'd like to learn about java deeper, at a second
          thought learning Software Engineering is interesting too.
          <p className={styles.subtitle}>
            You could also see my social media below:
          </p>
          <div className={styles["social-medias"]}>
            <a
              href="https://www.facebook.com/fadhil.kerenz.71/"
              target="_blank"
            >
              <svg
                className={styles["social-media-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60.734 60.733"
                xmlSpace="preserve"
              >
                <path d="M57.378.001H3.352A3.352 3.352 0 0 0 0 3.353v54.026a3.353 3.353 0 0 0 3.352 3.354h29.086V37.214h-7.914v-9.167h7.914v-6.76c0-7.843 4.789-12.116 11.787-12.116 3.355 0 6.232.251 7.071.36v8.198l-4.854.002c-3.805 0-4.539 1.809-4.539 4.462v5.851h9.078l-1.187 9.166h-7.892v23.52h15.475a3.355 3.355 0 0 0 3.355-3.351V3.351a3.352 3.352 0 0 0-3.354-3.35z" />
              </svg>
            </a>
            <a href="https://twitter.com/fadhilAlf" target="_blank">
              <svg
                className={styles["social-media-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
                xmlSpace="preserve"
              >
                <path d="M302.973 57.388a117.512 117.512 0 0 1-14.993 5.463 66.276 66.276 0 0 0 13.494-23.73 5 5 0 0 0-7.313-5.824 117.994 117.994 0 0 1-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 0 0-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 0 1-8.907-3.977 5 5 0 0 0-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 0 1-5.063-.735 4.998 4.998 0 0 0-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 0 1-14.095-.826 5 5 0 0 0-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 0 0-6.182-7.351z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/m_fadhilalfatih/"
              target="_blank"
            >
              <svg
                className={styles["social-media-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 169.063 169.063"
                xmlSpace="preserve"
              >
                <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z" />
                <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 0 0-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z" />
              </svg>
            </a>
            <a href="https://github.com/FadhilAF" target="_blank">
              <svg
                className={styles["social-media-icon"]}
                viewBox="0 -3.5 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                {" "}
                <g>
                  <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                  <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923m6.272 5.596c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65m4.304 7.159c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069m7.277 8.292c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258m9.403 2.8c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612m10.703 1.187c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86m10.514-.403c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-fadhil-al-fatih-623004196/"
              target="_blank"
            >
              <svg
                className={styles["social-media-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455 455"
                xmlSpace="preserve"
              >
                <path
                  style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  d="M246.4 204.35v-.665c-.136.223-.324.446-.442.665h.442z"
                />{" "}
                <path
                  style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  d="M0 0v455h455V0H0zm141.522 378.002H74.016V174.906h67.506v203.096zm-33.753-230.816h-.446C84.678 147.186 70 131.585 70 112.085c0-19.928 15.107-35.087 38.211-35.087 23.109 0 37.31 15.159 37.752 35.087 0 19.5-14.643 35.101-38.194 35.101zM385 378.002h-67.524V269.345c0-27.291-9.756-45.92-34.195-45.92-18.664 0-29.755 12.543-34.641 24.693-1.776 4.34-2.24 10.373-2.24 16.459v113.426h-67.537s.905-184.043 0-203.096H246.4v28.779c8.973-13.807 24.986-33.547 60.856-33.547 44.437 0 77.744 29.02 77.744 91.398v116.465z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
