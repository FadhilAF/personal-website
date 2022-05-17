import { Link } from "react-router-dom";
import  styles from './HeaderLinks.module.css';
import Burger from './Burger/Burger';

function HeaderLinks(props: {pages: (string)[], navState: {isNavOpen: boolean, setIsNavOpen: any}, isPhone: boolean}) {

  if (props.isPhone) {    
      return (
        <div className={styles["header-links"]}>
            <div className={styles["header-link"]}>
                <Burger navState={props.navState}/>
            </div>
        </div>
      );
  } else {
      return (
        <div className={styles["header-links"]}>
            <div className={styles["header-link"]}>
                <Link to="/">Home</Link>
            </div>
            {props.pages.map((page) => {
                return(
                    <div className={styles["header-link"]}>
                        <Link to={`/${page}`} key={page}>{page}</Link>
                    </div>
                )
            })}
            
        </div>
      );//tiap renderan .map ini harus dikasih key, biar si react biso bedai mano yang perlu di re-render atau idak, biasonyo key itu dari value yg kito ambek tulah
  }
}

export default HeaderLinks;