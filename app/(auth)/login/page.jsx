"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "../register/page.module.css";

const Page = () => {
  const [error, setError] = useState("");
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    status === "authenticated" ? router.push("/") : null;
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("-------------res:", res);
      res.status === 200 ? router.push("/") : null;
      res.status === 401 ? setError(res) : null;
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>
          {status === "loading" ? "Loading" : "Login"}
        </button>
        {error && "Something went wrong!"}
      </form>
      <button onClick={async () => signIn("google")} className={styles.button}>
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/register">
        Create new account
      </Link>
    </div>
  );
};

export default Page;
