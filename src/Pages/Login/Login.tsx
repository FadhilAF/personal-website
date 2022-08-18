import { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Contexts/AuthContext";
import styles from "./Login.module.css";
import logo from "../../Assets/logo.svg";

function Login(): JSX.Element {
  const authCtx = useContext(AuthContext);

  const [isError, setIsError] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const login = authCtx?.login;
  const getAuthenticatedData = authCtx?.getAuthenticatedData;

  interface LoginFormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    password: HTMLInputElement;
  }
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements as LoginFormElements;

    let response;
    try {
      login &&
        login(elements.username.value, elements.password.value).then((res) => {
          if (res?.axiosError) {
            console.log(res.axiosError);
          }
          if (res?.error) console.log(res.error);
          setIsError(res?.error ? res.error : "");

          if (res?.message) {
            console.log(res.message);
            setIsMessage(res?.message ? res.message : "");

            getAuthenticatedData && getAuthenticatedData();

            setTimeout(() => {
              navigate("/");
            }, 1000);
          }
        });
    } catch (err) {
      console.log(err);
      response = err;
    }
    return response;
  };

  return (
    <div className={styles["login-container-background"]}>
      <div className={styles["login-container"]}>
        <img src={logo} alt="Website logo" />
        <p className={" text-4xl font-bold m-8 "}>Login</p>
        <div className="text-left [&>*>*]:mb-4">
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
              <p className="mb-1">Password</p>
              <div className="flex-1 relative">
                <div className="[&>*>*]:w-6 [&>*>*]:h-6 [&>*>*]:fill-slate-400 absolute inset-y-0 right-0 mr-2 flex items-center">
                  <button
                    // default value type button itu "submit" jadi harus ganti biar dk trigger submit event
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
}

export default Login;
