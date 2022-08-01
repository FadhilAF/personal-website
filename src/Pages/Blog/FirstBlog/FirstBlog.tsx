import { useLocation } from "react-router-dom";
import formatDate from "../../../Utilities/FormatDate";

//images
import algorithmSlot from "../../../Assets/algorithmSlot.png";
import bracketSlot from "../../../Assets/bracketSlot.png";
import outputINRSA from "../../../Assets/outputINRSA.png";
import dependencyDiagram from "../../../Assets/dependencyDiagram.png";

import toBracket from "../../../Assets/toBracket.png";
import incrementNextRightSlotAlgorithm from "../../../Assets/incrementNextRightSlotAlgorithm.png";
import slotObjects from "../../../Assets/slotObjects.png";
import slotIterator from "../../../Assets/slotIterator.png";
import bracketPatternMaker from "../../../Assets/bracketPatternMaker.png";
import output from "../../../Assets/output.png";
import bonus from "../../../Assets/bonus.png";

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
      <div className="container p-4 sm:p-0 sm:mx-auto text-left">
        {data.id === "23102003" ? (
          <>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <div className="text-sm">
              <div className="relative inline-block top-0.5 mr-1 h-4 w-4 bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/ketuaSejarah.jpeg')] rounded-2xl"></div>
              {data.author}, last edited {formatDate(data.date)}
            </div>

            <div className="my-4 h-[150px] bg-contain bg-center bg-no-repeat bg-[image:url('./Assets/kurung.png')]"></div>

            <p>
              Solving a great competitive programming question has always been
              fun for me. In fact, that's the reason I choose programming for my
              life path. We can let our own creativity to answer the question,
              looking aside on how efficient the solution is. On this blog, I
              want to share my thinking journey to answer this programming
              question. Quick disclaimer, I might do stuff that is unnecessary
              or even worse all of this is unnecessary. So, I would like to get
              some feedback, you can contact me through social media (because
              there is no comment service here).
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

            <div className="max-w-[500px] mx-auto">
              <img
                className="mt-4 w-full"
                src={bracketSlot}
                alt="picture describing"
              />
              <p className="mb-4 text-sm">
                New way to interpret the pattern of brackets by using numbers
                separated by spaces
              </p>
            </div>

            <p>
              By looking at that and defining the pattern with this new
              definition, we can say every possible pattern of n brackets follow
              the algorithm of this:
            </p>

            <div className="max-w-[500px] mx-auto">
              <img
                className="mt-4 w-full "
                src={algorithmSlot}
                alt="picture describing"
              />
              <p className="mb-4 text-sm block">
                for every slot that has bracket more than 1, that slot will
                increment 1 bracket to the very next right slot, also the if the
                next right slot has more than 1 too, it will repeat the
                algorithm.
              </p>
            </div>

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
              back to brackets. I want to make the program using python
              generator, so we don't need to wait for every possible pattern
              finished calculated, and get the answer one by one. I will explain
              shortly every component of my code and the python concept (you can
              access the full code{" "}
              <a
                target="_blank"
                href="https://gist.github.com/FadhilAF/02b561e5693f512781a70704d937ad66"
                className="underline"
              >
                here
              </a>
              )
            </p>

            <div className="max-w-[500px] mx-auto">
              <img
                className="mt-4 w-full"
                src={dependencyDiagram}
                alt="picture describing"
              />
              <p className="text-sm">
                The dependency diagram for every generator
              </p>
            </div>

            <br />

            <h4 className="text-md font-bold">
              incrementNextRightSlotAlgorithm
            </h4>

            <div className="max-w-[500px] mx-auto">
              <img
                className="my-4 w-full"
                src={incrementNextRightSlotAlgorithm}
                alt="picture describing"
              />
            </div>

            <p>
              This generator is the simplest than the other because it depens on
              itself. And, the generator name already self-described what this
              generator does. That is, generating the sequence of number that
              interpret how many brackets there are on every slot. In short,
              this is just that algorithm we saw before, but in python language
              form.
            </p>

            <div className="max-w-[500px] mx-auto">
              <img
                className="mt-4 w-full"
                src={outputINRSA}
                alt="picture describing"
              />
              <p className="text-sm">
                If you iterate the generator till the end, you will get this
              </p>
            </div>

            <br />

            <h4 className="text-md font-bold">toBracket</h4>

            <div className="max-w-[500px] mx-auto">
              <img
                className="my-4 w-full"
                src={toBracket}
                alt="picture describing"
              />
            </div>

            <p>
              This generator translate that intepretation (brackets per slot),
              to the form of real brackets. We can see the basis of this
              generator is the case when there is only 1 bracket on the slot.
              Because the only pattern that can be made is "()". If the number
              of bracket per slot is other than that, the generator asks
              bracketPatternMaker generator to produce all of the possible
              pattern of n-1 brackets. After the bracketPatternMaker generator
              give the pattern, this function put the pattern given inside an
              outer bracket.
            </p>

            <br />

            <h4 className="text-md font-bold">bracketPatternMaker</h4>

            <div className="max-w-[500px] mx-auto">
              <img
                className="my-4 w-full"
                src={bracketPatternMaker}
                alt="picture describing"
              />
            </div>

            <p>
              The bracketPatternMaker is actually just putting the output from
              incrementNextRightSlotAlgorithm (which is an array), and then put
              that array output to the slotObjects generator. After that, the
              slotObjects generator produce the final bracket pattern.
            </p>

            <br />

            <h4 className="text-md font-bold">slotObjects & slotIterator</h4>

            <div className="max-w-[500px] mx-auto">
              <img
                className="my-4 w-full"
                src={slotObjects}
                alt="picture describing"
              />
            </div>

            <p>
              This generator is making the object of that "number of bracket per
              slot" intepretation we made, by putting each number in the array
              (the one we got from incrementNextRightSlotAlgorithm) to the
              "toBracket" generator. Because we just made the generator, we need
              a place to store the output of that generator each time. For that,
              we need to make another list that contains the output for every
              objects of the "toBracket" generator.
            </p>

            <div className="max-w-[500px] mx-auto">
              <img
                className="my-4 w-full"
                src={slotIterator}
                alt="picture describing"
              />
            </div>

            <p>
              The "slotIterator" generator just iterate the list of "toBracket"
              generator object that we got from the "slotObjects". The purpose
              of the iteration is to produce all combination of the "toBracket"
              output for each index of the list. We need to keep in mind that
              list in python is passed by reference, so we dont need to bother
              passing the list value on every depth of recursion. Anyway, this
              is how the code works:
            </p>

            <ol className="list-decimal px-8 my-4">
              <li>
                Iterate the first index of the list first, until the end of the
                generator output
              </li>
              <li>
                If the generator reach the end, iterate the next index. then,
                iterate the first index back again
              </li>
            </ol>

            <p>
              We see that this this generator depends on the "toBracket"
              generator, but not really. This generator just need the
              "toBracket" generator to restart the "toBracket" objects that
              already reach the end of the iteration.
            </p>

            <div className="max-w-[500px] mx-auto">
              <img
                className="mt-4 w-full"
                src={output}
                alt="picture describing"
              />
              <p className="text-sm">
                The input and the output from the script
              </p>
            </div>

            <br />

            <h3 className="text-lg font-bold">Bonus</h3>

            <p>
              We could also add a new bracket for the slotObjects generator to
              save every output from the "toBracket" generator object. That way,
              we don't need to recalculate things that already calculated
              before. And also this way, the output can be produced slightly
              faster than before.
            </p>

            <div className="max-w-[500px] mx-auto">
              <img
                className="my-4 w-full"
                src={bonus}
                alt="picture describing"
              />
            </div>

            <p>
              That way, the "slotIterator" doesn't depends on the "toBracket"
              generator. Because we dont need to restart the generator objects
              anymore.
            </p>

            <br />
            <p>This is the end of the blog, thank you.</p>
          </>
        ) : (
          <h1 className="text-xl text-center font-bold">Blog Not Found</h1>
        )}
      </div>
    </div>
  );
};
export default FirstBlog;
