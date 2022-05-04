import './Burger.css';
import { useState } from 'react';



function Burger() {
    const [isNavOpen, setIsNavOpen] = useState(false);//ni tarok di mamaknyo

    return (
        <div className={`BURGER-ICON relative flex items-center overflow-hidden h-8 w-8 ${isNavOpen?'':'BURGER-CLICKED'}`} 
             onClick={()=>{setIsNavOpen(!isNavOpen)}}
        >
            <span className="LINE absolute h-1 w-8 rounded-sm"></span>
        </div>
    );
}

export default Burger;