import styles from './Footer.module.css';
import Wave from './Wave/Wave';
import logo from '../../Assets/logo.svg';

function Footer() {
    return (
        <>
            <Wave />
            <div className={styles.infos}>
                <img className={styles.logo} src={logo} alt="Logo Website" />
                <div className={styles['about-page']}>
                    <p className={styles.title}>About this Website</p>
                    The first purpose of this wesite is for me to learn react and express.
                    And the second one is to share information that I want to share. Lastly,
                    to give authentication to some special people.
                </div>
                <div className={styles['about-me']}>
                    Fuck fuck 2
                </div>
            </div>
        </>
    )
}

export default Footer;