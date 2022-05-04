import { Link } from "react-router-dom";
import  styles from './HeaderLinks.module.css';
import useIfPhone from '../../CustomHooks/useIsPhone';
import Burger from './Burger/Burger';

function HeaderLinks() {
  const isPhone = useIfPhone();

  if (isPhone) {
      return (
        <div className={styles["header-links"]}>
            <div className={styles["header-link"]}>
                <Burger />
            </div>
        </div>
      );
  } else {
      return (
        <div className={styles["header-links"]}>
            <div className={styles["header-link"]}>
                <Link to={"/"}>Home</Link>
            </div>
            <div className={styles["header-link"]}>
                <Link to={"/Blog"}>Blog</Link>
            </div>
            <div className={styles["header-link"]}>
                <Link to={"/Specials"}>Specials</Link>
            </div>
        </div>
      );
  }
}

export default HeaderLinks;