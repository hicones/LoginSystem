import React, { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/api";

//auth
import { signInRequest, recoverUserInformation } from "../services/auth";
import { firebase, auth } from "../services/firebaseSetup";

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
  signInWithGoogle: () => void;
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
      recoverUserInformation();
    }
  }, []);

  //signIn
  async function signIn({ email, password }: ISignInData) {
    //login user
    signInRequest({
      email,
      password,
    })
      .then((userCredential) => {
        const user = userCredential.user?._delegate;
        //set user token
        setCookie({}, "user.token", user.accessToken, {
          maxAge: 60 * 60 * 24, //24 hours
          path: "/",
        });

        //set user data
        setUser({
          email: user.email,
          emailVerified: user.emailVerified,
          accessToken: user.accessToken,
          photoURL: user.photoURL,
          uid: user.uid,
          phoneNumber: user.phoneNumber,
        });

        //set user default header
        // @ts-ignore: Unreachable code error
        api.defaults.headers["Authorization"] = `Bearer ${user.accessToken}`;

        //redirect to home page
        Router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    const user = result.user?._delegate;

    setUser({
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      accessToken: user.accessToken,
      photoURL: user.photoURL,
      uid: user.uid,
      phoneNumber: user.phoneNumber,
    });

    Router.push("/");
  }

  //signOut
  async function signOut() {
    destroyCookie(null, "user.token", {
      path: "/",
    });
    setUser(null);
    auth.signOut();
    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        signIn,
        signOut,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
