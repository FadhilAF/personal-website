import { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Contexts/AuthContext";
import logo from "../../Assets/logo.svg";

const signup = () => {
  const authCtx = useContext(AuthContext);
  const [isError, setIsError] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signup = authCtx?.signup;

  const navigate = useNavigate();

  interface LoginFormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    email: HTMLInputElement;
    confirmEmail: HTMLInputElement;
    password: HTMLInputElement;
    token: HTMLInputElement;
  }
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements as LoginFormElements;

    let response;
    try {
      if (elements.confirmEmail.value !== elements.email.value) {
        setIsError("Pastikan Kolom Email Benar");
        setIsMessage("");
      } else {
        signup &&
          signup(
            elements.username.value,
            elements.email.value,
            elements.password.value,
            elements.token.value
          ).then((res) => {
            if (res?.axiosError) console.log(res.axiosError);

            if (res?.error) console.log(res.error);
            setIsError(res?.error ? res.error : "");

            if (res?.message) {
              console.log(res.message);
              setIsMessage(res?.message ? res.message : "");

              setTimeout(() => {
                navigate("/login");
              }, 1000);
            }
          });
      }
    } catch (err) {
      console.log(err);
      response = err;
    }
    return response;
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className="my-16 w-[22.25rem] flex flex-col items-center justify-center p-8 rounded-2xl"
        style={{
          backgroundColor: "var(--bg-2)",
          transition: "background-color .5s",
        }}
      >
        <img className="w-20" src={logo} alt="Website logo" />
        <p className={" text-4xl font-bold m-8 "}>Sign Up</p>

        <div className="text-left w-full [&>*>*]:mb-4">
          <form onSubmit={submitHandler}>
            <div>
              <p className="mb-1">Username</p>
              <input
                style={{ backgroundColor: "var(--bg-1)" }}
                className="shadow-inner focus:ring-1 w-full block rounded-lg py-1 px-3"
                placeholder="Username"
                name="username"
                type="text"
              />
            </div>
            <div>
              <p className="mb-1">Email</p>
              <input
                style={{ backgroundColor: "var(--bg-1)" }}
                className="shadow-inner focus:ring-1 w-full block rounded-lg py-1 px-3"
                placeholder="emailanda@email.com"
                name="email"
                type="text"
              />
            </div>
            <div>
              <p className="mb-1">Confirm Email</p>
              <input
                style={{ backgroundColor: "var(--bg-1)" }}
                className="shadow-inner focus:ring-1 w-full block rounded-lg py-1 px-3"
                placeholder="emailanda@email.com"
                name="confirmEmail"
                type="text"
              />
            </div>
            <div>
              <p className="mb-1">Password</p>
              <div className="flex-1 relative">
                <div className="[&>*>*]:w-6 [&>*>*]:h-6 [&>*>*]:fill-slate-400 absolute inset-y-0 right-0 mr-2 flex items-center">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
                <input
                  style={{ backgroundColor: "var(--bg-1)" }}
                  className="focus:ring-1 w-full block shadow-inner rounded-lg py-1 pl-3 pr-12"
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
              </div>
            </div>
            <div>
              <p className="mb-1">Signup Token</p>
              <input
                style={{ backgroundColor: "var(--bg-1)" }}
                className="shadow-inner focus:ring-1 w-full block rounded-lg py-1 px-3"
                placeholder="Insert Token"
                name="token"
                type="text"
              />
            </div>
            {isError && <div>{isError}</div>}
            {isMessage && <div>{isMessage}</div>}
            <div className="w-full flex justify-center">
              <input
                className="hover:cursor-pointer green-btn w-full"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
