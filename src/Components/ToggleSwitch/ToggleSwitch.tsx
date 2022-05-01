import { useEffect, useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props: { label: string; theme: {theme: string; setTheme: any;}}) => {
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    if (props.theme.theme === 'dark') { //kalo lah diset dari awal dark, toggleSwitch ny langsung ke switch
      setChecked(false);
    } else {
      setChecked(true);
    }
  })
  
  const switchTheme = () => {
		const newTheme = props.theme.theme === 'light' ? 'dark' : 'light';
    
    if (newTheme === 'dark') {
      setChecked(false);
    } else {
      setChecked(true);
    }

		props.theme.setTheme(newTheme);
	}

  return (
    <div className="toggle-switch">
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