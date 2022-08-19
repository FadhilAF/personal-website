import { createContext, useState } from "react";
import axios from "axios";

type authResponse = { error?: string; message?: string };
interface authContextResponse extends authResponse {
  axiosError?: unknown;
}

interface authenticatedData {
  userId?: string;
  username?: string;
  email?: string;
  tokenId?: string;
  token?: string;
  role?: "comment" | "blog" | "admin";
}
interface getAuthenticatedDataResponse {
  userData?: authenticatedData;
  error?: string;
  axiosError?: unknown;
}

interface authContextInterface {
  userData: authenticatedData;
  getAuthenticatedData: () => Promise<getAuthenticatedDataResponse>;
  login: (username: string, password: string) => Promise<authContextResponse>;
  signup: (
    username: string,
    email: string,
    password: string,
    token: string
  ) => Promise<authContextResponse>;
}

export const AuthContext = createContext<authContextInterface | null>(null);

const AuthProvider = (props: { children: JSX.Element }) => {
  const baseUrl = import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/auth`
    : "http://localhost:5000/auth";

  const [userData, setUserData] = useState({} as authenticatedData);

  const getAuthenticatedData = async () => {
    let response;

    try {
      response = await axios.get<getAuthenticatedDataResponse>(
        baseUrl + "/login",
        { withCredentials: true }
      );
      console.log(response);
      if (response.data?.error) {
        setUserData({});
        return { error: response.data.error };
      }
      setUserData(response.data.userData!);
      return { ...response.data.userData };
    } catch (err: unknown) {
      return { axiosError: err };
    }
  };

  const login = async (username: string, password: string) => {
    let response;
    try {
      response = await axios.post<authResponse>(
        baseUrl + "/login",
        { username, password },
        { withCredentials: true }
      );

      if (response.data?.error) return { error: response.data.error };

      return { ...response.data };
    } catch (err: unknown) {
      return { axiosError: err };
    }
  };

  const signup = async (
    username: string,
    email: string,
    password: string,
    token: string
  ) => {
    let response;
    console.log("sini deck");
    try {
      response = await axios.post<authResponse>(
        baseUrl + "/signup",
        {
          username,
          email,
          password,
          token,
        },
        { withCredentials: true }
      );
      if (response.data.error) return { error: response.data.error };

      return { ...response.data };
    } catch (err: unknown) {
      return { axiosError: err };
    }
  };

  return (
    <AuthContext.Provider
      value={{ userData, getAuthenticatedData, login, signup }}
    >
      {props?.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
