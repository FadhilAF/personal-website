import styles from './Footer.module.css';
import Wave from './Wave/Wave';

function Footer() {
    return (
        <>
            <Wave />
            <div className={styles.infos}></div>
        </>
    )
}

export default Footer;