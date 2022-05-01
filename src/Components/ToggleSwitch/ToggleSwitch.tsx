import "./ToggleSwitch.css";

const ToggleSwitch = (props: { label: string; switchTheme: any;}) => {

  return (
    <div className="toggle-switch">
      <input type="checkbox" className="checkbox" 
              name={props.label} id={props.label} onChange={props.switchTheme} />
      <label className="label" htmlFor={props.label}>
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
  );
};
  
export default ToggleSwitch;