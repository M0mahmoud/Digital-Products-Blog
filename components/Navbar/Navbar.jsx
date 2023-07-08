"use client";

import Link from "next/link";
import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { links } from "./NavLinks";
import style from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={style.container}>
        <Link href={"/"} className={style.logo}>
          Blog
        </Link>
        <div
          className={isMenuOpen ? `${style.links} ${style.open}` : style.links}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={style.link}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {link.title}
            </Link>
          ))}
          <button className={style.logout} onClick={() => {}}>
            Logout
          </button>
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
