import { useLocation } from "react-router-dom";
import formatDate from "../../../Utilities/FormatDate";

const FirstBlog = () => {
  const location = useLocation();

  const query = Object.fromEntries(new URLSearchParams(location.search)) as {
    id: string;
  };

  //ntar ganti jadi axios, skrg blm nymbg ke bakend
  let data: {
    id: string;
    category: string;
    author: string;
    profilePicture: string;
    date: Date;
    title: string;
    content: string;
  } = {
    id: "",
    category: "",
    author: "",
    profilePicture: "",
    date: new Date(),
    title: "",
    content: "",
  };
  if (query.id === "23102003") {
    data = {
      id: "23102003",
      category: "COMPETITIVE PROGRAMMING",
      author: "M Fadhil Al-Fatih",
      profilePicture: "",
      date: new Date(2022, 5, 30),
      title: 'My Approach to "Regular Bracket Sequences" ',
      content: "",
    };
  }

  return (
    <div>
      <div className="m-4 text-left">
        {data.id === "23102003" ? (
          <>
            <h1 className="text-2xl font-bold">
              {data.title}
            </h1>
            <div className="text-sm"><div className="relative inline-block top-0.5 mr-1 h-4 w-4 bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/ketuaSejarah.jpeg')] rounded-2xl"></div>
              {data.author}, last edited {formatDate(data.date)}
            </div>

            <div className="my-4 h-[150px] bg-gray-300 bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/kurung.png')]"></div>

            <p>
              Solving a great competitive programming question has always been fun for me. In fact, that's the reason I choose programming for my life path.
              We can let our own creativity to answer the question, looking aside on how efficient the solution is. On this blog, I want to share my thinking 
              journey to answer this programming question.
            </p>
            <br/>
            <h3 className="text-lg font-bold">1. The Question</h3>
            <p>
              
              <a target="_blank" href="https://codeforces.com/contest/1574/problem/A" className="underline">here</a>
            </p>
          </>
        ) : (
          <h1 className="text-xl text-center font-bold">Blog Not Found</h1>
        )}
      </div>
    </div>
  );
};
export default FirstBlog;
