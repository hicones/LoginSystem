import React, { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/api";

//auth
import { signInRequest, recoverUserInformation } from "../services/auth";

//Interfaces
import { IUser } from "../interfaces/user.interface";

type props = {
  children: React.ReactNode;
};

type IAuthContext = {
  isAuthenticated: boolean;
  user: IUser | null;
  signIn: (data: ISignInData) => Promise<void>;
  signOut: () => void;
};

type ISignInData = {
  email: string;
  password: string;
};

//Context
const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: props) {
  const [user, setUser] = useState<IUser | null>(null);

  //if token exist get user information
  useEffect(() => {
    const { "user.token": token } = parseCookies();

    if (token) {
      recoverUserInformation()
        .then((res) => {
          setUser(res.data.data.customer);

          if (process.env.NODE_ENV === "development")
            console.log("User Data Recovery");
        })
        .catch(() => {
          signOut();

          if (process.env.NODE_ENV === "development")
            console.log(
              "deslogado para recuperar informaçoes do user, AuthContext.tsx"
            );
        });
    }
  }, []);

  //signIn
  async function signIn({ email, password }: ISignInData) {
    //login user
    signInRequest({
      email,
      password,
    })
      .then(({ data }) => {
        const { token, user } = data.data.customer;
        //set user token
        setCookie({}, "user.token", token, {
          maxAge: 60 * 60 * 24, //24 hours
          path: "/",
        });

        //set user data
        setUser(user);

        //set user default header
        // @ts-ignore: Unreachable code error
        api.defaults.headers["Authorization"] = `Bearer ${token}`;

        //redirect to home page
        Router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //signOut
  async function signOut() {
    destroyCookie(null, "user.token", {
      path: "/",
    });
    setUser(null);
    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
