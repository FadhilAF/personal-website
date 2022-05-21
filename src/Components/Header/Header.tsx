import styles from './Header.module.css';
import logo from '../../Assets/logo.svg';
import { Link } from "react-router-dom";
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import DropdownHeader from './HeaderLinks/DropdownHeader/DropdownHeader';
import useIfPhone from '../CustomHooks/useIsPhone';


function Header(props: { path: string; theme: {theme: string; setTheme: any;}}) {
	const pages = ["Blog", "Specials"];
	
	const isPhone = useIfPhone();
	const [isNavOpen, setIsNavOpen] = useState(false);

	//untuk biar scroll down header tutup
	const [hide, setHide] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== 'undefined') { 
		if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
			setHide(true);
			setIsNavOpen(false); 
		} else { // if scroll up show the navbar
			setHide(false);  
		}

		// remember current page location to use in the next move
		setLastScrollY(window.scrollY); 
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
		window.addEventListener('scroll', controlNavbar);

		// cleanup function
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
		}
	}, [lastScrollY]);
	//fungsi untuk biar scroll ke pocok ilang selesai

	const dropdownTransition = useTransition((isNavOpen), {
		config: {duration: 300},//utk config durasi dll (duration dalam bentuk ms)
		from: {x: 0, y:-100, opacity: 0},//posisi awal (x,y dalam bentuk persen lokasi benda pas enter)
		enter: {x: 0, y: 0, opacity: 1},//posisi pas diteken
		leave: {x: 0, y:-100, opacity: 0}//posisi pas ngilang lagi
	});

    return (
		<div className={`${ styles.header } ${ props.path !== "/"  || styles['home-header'] } ${ hide && styles['hide-header']}`}>
			<div className={styles.navbar}>
				<div className={styles["navbar-content"]}>
					<div className={styles.logo}>
						<Link to={"/"}>
							<img src={logo} alt="Logo Website" />
						</Link>
					</div>
					<div className={styles["non-logo"]}>
						<HeaderLinks pages={pages} isPhone={isPhone} navState={{isNavOpen, setIsNavOpen}}/>
						<ToggleSwitch label="Dark Mode" theme={props.theme}/>
					</div>
				</div>
			</div>
			{isPhone && dropdownTransition((style, item) => //item itu gek diisi isNavOpen, style itu diisi oleh from enter leave
				item?<animated.div style={style} ><DropdownHeader navState={{isNavOpen, setIsNavOpen}} pages={pages}/></animated.div>: ''//himpit animated.div
			)}
		</div>
    )
}

export default Header;