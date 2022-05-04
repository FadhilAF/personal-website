import './Burger.css';

function Burger(props : {navState: {isNavOpen: boolean, setIsNavOpen: any}}) {
    return (
        <div className={`BURGER-ICON relative flex items-center overflow-hidden h-8 w-8 ${props.navState.isNavOpen?'BURGER-CLICKED':''}`} 
             onClick={()=>{props.navState.setIsNavOpen(!props.navState.isNavOpen)}}
        >
            <span className="LINE absolute h-1 w-8 rounded-sm"></span>
        </div>
    );
}

export default Burger;