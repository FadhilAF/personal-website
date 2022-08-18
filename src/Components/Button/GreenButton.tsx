import { Link } from "react-router-dom";
import "./Button.css";

function GreenButton(props: { text: string; className: string; link: string }) {
  //className cuma untuk ngurusi width pake tailwind,
  return (
    <Link className="m-4" to={props.link}>
      <div
        className={`p-1 rounded-md shadow-md green hover:scale-105 ${props.className}`}
      >
        <p className="text-lg">{props.text}</p>
      </div>
    </Link>
  );
}

export default GreenButton;
