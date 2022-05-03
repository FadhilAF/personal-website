import { useEffect, useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props: { label: string; theme: {theme: string; setTheme: any;}}) => {
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    props.theme.theme === 'dark' ? setChecked(false) : setChecked(true) //kalo lah diset dari awal dark, toggleSwitch ny langsung ke switch
    
  }, [props.theme.theme])
  
  const switchTheme = () => {
		props.theme.setTheme(props.theme.theme === 'light' ? 'dark' : 'light')
	}

  return (
    <div className="toggle-switch noSelect">
      <input type="checkbox" className="checkbox" 
              name={props.label} id={props.label} onChange={switchTheme} checked={checked} />
      <label className="label" htmlFor={props.label}>
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
  );
};
  
export default ToggleSwitch;