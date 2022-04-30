import styles from './Header.module.css';
import logo from '../../Assets/logo.svg';
import { Link } from "react-router-dom";

function Header(props: { path: string; }) {

    return (
        <div className={`${styles.header} ${props.path !== '/' && styles['home-header']}`}>
            <div className={styles["header-content"]}>
                <div className={styles.logo}>
					<Link to={"/"}>
						<img src={logo} alt="Logo Website" />
					</Link>
				</div>
				<div className={styles["non-logo"]}>
					<div className={styles["header-links"]}>
						<div className={styles["header-link"]}>
							<Link to={"/"}>Home</Link>
						</div>
						<div className={styles["header-link"]}>
							<Link to={"/Blog"}>Blog</Link>
						</div>
					</div>
					<div className={styles.switch}>
					</div>
				</div>
            </div>
        </div>
    )
}

export default Header;