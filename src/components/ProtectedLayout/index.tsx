import React, { Children, useContext, useEffect, useState } from "react";
import Router from "next/router";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      Router.push("/auth/login");
    }
  }, [user]);

  return children;
};
