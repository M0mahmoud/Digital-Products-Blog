"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Loading from "./loading";
import styles from "./page.module.css";

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <h1>Plz, Login To See Your Dashboard...</h1>
        <Link className="btn" href={"/login"}>
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>Page</div>
    </div>
  );
};

export default Page;
