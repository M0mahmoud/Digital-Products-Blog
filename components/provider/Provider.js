"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const Providders = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Providders;
