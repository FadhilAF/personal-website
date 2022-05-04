import { Link } from 'react-router-dom';
import styles from './DropdownHeader.module.css';

function DropdownHeader() {
    return (
        <div className={styles.dropdown}>
            <div className={styles.section}>
                <Link to={"/"}>Home</Link>
            </div>
            <div className={styles.section}>
                <Link to={"/Blog"}>Blog</Link>
            </div>
            <div className={styles.section}>
                <Link to={"/Specials"}>Specials</Link>
            </div>
        </div>
    );
}

export default DropdownHeader;