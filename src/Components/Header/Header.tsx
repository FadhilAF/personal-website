import styles from './Header.module.css';
import logo from '../../Assets/logo.svg';
import { Link } from "react-router-dom";
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import DropdownHeader from './HeaderLinks/DropdownHeader/DropdownHeader';
import useIfPhone from '../CustomHooks/useIsPhone';


function Header(props: { path: string; theme: {theme: string; setTheme: any;}}) {
	const isPhone = useIfPhone();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const dropdownTransition = useTransition(isNavOpen, {
		from: {x: 0, y:-100, opacity: 0},
		enter: {x: 0, y: 0, opacity: 1},
		leave: {x: 0, y:-100, opacity: 0}
	});

    return (
		<div className={styles.header}>
			<div className={`${styles.navbar} ${props.path !== '/' && styles['home-navbar']}`}>
				<div className={styles["navbar-content"]}>
					<div className={styles.logo}>
						<Link to={"/"}>
							<img src={logo} alt="Logo Website" />
						</Link>
					</div>
					<div className={styles["non-logo"]}>
						<HeaderLinks isPhone={isPhone} navState={{isNavOpen, setIsNavOpen}} />
						<ToggleSwitch label="Dark Mode" theme={props.theme}/>
					</div>
				</div>
			</div>
			{dropdownTransition((style, item) => //item itu gek diisi isNavOpen, style itu diisi oleh from enter leave
				item?<animated.div style={style} ><DropdownHeader /></animated.div>: ''//himpit animated.div
			)}
		</div>
    )
}

export default Header;