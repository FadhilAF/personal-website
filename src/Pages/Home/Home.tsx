import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';

function Home() {
    document.title = 'FadhilAF - Home Page';
    return (
        <div>
            <div className={styles.greet}>
                <div className={styles.name}>
                    <Typewriter 
                    options = {{ loop: true }} 
                    onInit={ (typewriter) => {
                        typewriter
                            .typeString("Muhammad")
                            .pauseFor(1000)
                            .typeString(" Fadhil Al-Fatih")
                            .pauseFor(6000)
                            .start();
                    }}/> 
                </div>
                <div className={styles.desc}>Hello, welcome to my personal website!</div> 
            </div>
        </div>
    )//&#8209; = non breaking hypen
}

export default Home;