import { useContext } from "react";
import Typewriter from "typewriter-effect";
import styles from "./Home.module.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { ReactComponent as LoginBorderUp } from "../../Assets/loginBorderUp.svg";
import { ReactComponent as LoginBorderDown } from "../../Assets/loginBorderDown.svg";
import GreenButton from "../../Components/Button/GreenButton";

function Home() {
  document.title = "FadhilAF - Home Page";

  const authCtx = useContext(AuthContext);

  const userData = authCtx?.userData;

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
        {userData?.username ? (
          <div className="m-8">
            <p className="text-xl font-bold">Hello {userData.username}!</p>
            <p className="text-lg">You have {userData.role} role here</p>
          </div>
        ) : (
          <>
            <div className={styles["home-login-content"]}>
              <div className={styles["p-login"]}>
                <p className={"font-bold text-lg"}>
                  Here's the login button to authenticate
                </p>
              </div>
              <p className="font-light m-8">
                (not everyone could create an account, its mostly my family
                through direct contact with me)
              </p>
            </div>
            <GreenButton className="w-24" text="Log In" link="/login" />
          </>
        )}

        <LoginBorderDown />
      </div>
    </div>
  ); //&#8209; = non breaking hypen
}

export default Home;
