"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import style from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => (
    // With Issue
    <>
      <Link
        href="/portfolio"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={style.link}
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={style.link}
      >
        About
      </Link>
      <Link
        href="/blog"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={style.link}
      >
        Blog
      </Link>
      <Link
        href="/contact"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={style.link}
      >
        Contact
      </Link>
      <Link
        href="/dashboard"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={style.link}
      >
        Dashboard
      </Link>
    </>
  );

  return (
    <>
      <div className={style.container}>
        <Link href={"/"} className={style.logo}>
          Blog
        </Link>
        <div
          className={isMenuOpen ? `${style.links} ${style.open}` : style.links}
        >
          <NavLinks />
          {status === "authenticated" ? (
            <button className={style.logout} onClick={() => signOut()}>
              Logout
            </button>
          ) : (
            <button className={style.logout} onClick={() => signIn()}>
              Login
            </button>
          )}
          <DarkMode />
        </div>
        <button className={style.menuButton} onClick={handleMenuToggle}>
          Menu
        </button>
      </div>
      <div
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={isMenuOpen ? style.overlay : ""}
      />
    </>
  );
};

export default Navbar;
