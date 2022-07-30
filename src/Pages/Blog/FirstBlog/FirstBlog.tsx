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
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <div className="text-sm">
              <div className="relative inline-block top-0.5 mr-1 h-4 w-4 bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/ketuaSejarah.jpeg')] rounded-2xl"></div>
              {data.author}, last edited {formatDate(data.date)}
            </div>

            <div className="my-4 h-[150px] bg-gray-300 bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/kurung.png')]"></div>

            <p>
              Solving a great competitive programming question has always been
              fun for me. In fact, that's the reason I choose programming for my
              life path. We can let our own creativity to answer the question,
              looking aside on how efficient the solution is. On this blog, I
              want to share my thinking journey to answer this programming
              question.
            </p>
            <br />
            <h3 className="text-lg font-bold">1. The Question</h3>
            <p>
              Basically, the question wants us to output the mathematically
              valid pattern of brackets, for n many brackets "()" give n many
              pattern (you can see the original question{" "}
              <a
                target="_blank"
                href="https://codeforces.com/contest/1574/problem/A"
                className="underline"
              >
                here
              </a>
              ). Long story short, my friend already have an answer for it, but
              still don't feel right because the answer just give n many
              pattern. I just think why not make an answer that can give EVERY
              POSSIBLE pattern of n many brackets. I'm still not comfortable
              enough to say that my answer provides every pattern, but i think
              its cool enough.
            </p>
            <br />
            <h3 className="text-lg font-bold">2. Idea</h3>
            <p>
              We know that we can put bracket inside of bracket in math like
              "(())", and put it aside "()()" that's basically all possible
              pattern if we only have 2 brackets. If we have 3 brackets the
              pattern will look like "(()())" or "(())()". From all of that
              example, I can organize the pattern by looking at the outer
              bracket, and bracket that inside of an another bracket. I can say
              that for 1 outer bracket, it takes 1 slot, for example: "(())()"
              for that example we can say that it has 2 outer brackets, so that
              example took 2 slot "_ _", AND count how many brackets on every
              slot, so for "(())()" the answer is "2 1" because one slot has 2
              brackets in it and the other has 1.
            </p>

            <div className="my-4 h-[150px] bg-gray-300 bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/bracketSlot.png')]"></div>

            <p className="text-sm">
              New way to interpret the pattern of brackets by using numbers
              separated by spaces
            </p>
            <p>
              By looking at that and defining the pattern with this new
              definition, we can say every possible pattern of n brackets follow
              the algorithm of this:
            </p>

            <div className="my-4 h-[150px] bg-gray-300 bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/algorithmSlot.png')]"></div>

            <p className="text-sm">
              for every slot that has bracket more than 1, that slot will
              increment 1 bracket to the very next right slot, also the if the
              next right slot has more than 1 too, it will repeat the algorithm.
            </p>
            <p>
              Okay, about the brackets that inside an another bracket, we can
              see the brackets inside the pattern 3 "((())) and (()())" it gives
              the every possible pattern of 2 brackets (the n-1 of it) "(()) and
              ()()", so that is a really visible recursion/repetition.
            </p>

            <br />

            <h3 className="text-lg font-bold">3. Code</h3>

            <p>
              We already got the idea, now just need to write that algorithm
              into a programming language and turn that number intepretation
              back to brackets
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
