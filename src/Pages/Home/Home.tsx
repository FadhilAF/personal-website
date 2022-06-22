import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import { ReactComponent as LoginBorderUp } from "../../Assets/loginBorderUp.svg";
import { ReactComponent as LoginBorderDown } from "../../Assets/loginBorderDown.svg";
import GreenButton from "../../Components/Button/GreenButton";
import { useEffect } from "react";

function Home() {
  document.title = "FadhilAF - Home Page";
  return (
    <div>
      <div className={styles.greet}>
        <div className={styles.name}>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Muhammad")
                .pauseFor(1000)
                .typeString(" Fadhil Al-Fatih")
                .pauseFor(5000)
                .start();
            }}
          />
        </div>
        <div className={styles.desc}>
          Hello, welcome to my personal website!
        </div>
      </div>
      <div className={styles.login}>
        <LoginBorderUp />
        <div className={styles["home-login-content"]}>
          <div className={styles["p-login"]}>
            <p className={"font-bold text-lg"}>
              Here's the login button to authenticate
            </p>
          </div>
          <p className="font-light m-8">
            (not everyone could create an account, its mostly my family through
            direct contact with me)
          </p>
        </div>
        <GreenButton className="w-24" text="Log In" link="/login" />
        <LoginBorderDown />
      </div>
    </div>
  ); //&#8209; = non breaking hypen
}

export default Home;
