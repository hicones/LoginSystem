import React, { Children } from "react";

//interfaces
type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return <section>{children}</section>;
}

export { Layout };
