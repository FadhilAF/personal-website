import { Link } from "react-router-dom";
import "./BlogCard.css";
import axios from "axios";
import formatDate from "../../../Utilities/FormatDate";

function BlogCard() {
  //ntar ganti jadi props dari parent yg didapat dr axios
  const props: {
    id: string;
    category: string;
    author: string;
    cover: string;
    profilePicture: string;
    date: Date;
    title: string;
    description: string;
  } = {
    id: "23102003",
    category: "COMPETITIVE PROGRAMMING",
    author: "M Fadhil Al-Fatih",
    cover: "",
    profilePicture: "",
    date: new Date(2021, 5, 30),
    title: 'My Approach to "Regular Bracket Sequences" ',
    description:
      "About how to produce every possible mathematically valid bracket sequences, if given n many brackets. I used recursion and a generator concept with python.",
  };

  const link = axios.getUri({ url: "/blog/read", params: { id: props.id } });

  return (
    <Link
      to={link}
      className="hover:scale-102 hover:cursor-pointer transition-transform duration-200 card grid"
    >
      <div className="card-image block bg-white bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/kurung.png')]"></div>
      <div className="card-text block relative text-left px-2">
        <p className="category relative text-sm font-bold">{props.category}</p>
        <div className="title block text-xl font-bold">{props.title}</div>
        <div className="description block text-xs">{props.description}</div>
        <hr className="line  my-1" />
        <div className="profile h-max relative flex items-center">
          <div className="profile-picture w-5 h-5 mr-2 rounded-2xl bg-white bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/ketuaSejarah.jpeg')]"></div>
          <span className="profile-name text-sm mr-1">{props.author},</span>
          <span className="post-date text-sm">{formatDate(props.date)}</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
