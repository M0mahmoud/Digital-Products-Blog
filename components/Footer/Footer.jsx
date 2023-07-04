import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&#169;2023 Digital Products All rights reserved.</div>
      <div className={styles.social}>
        <Link href={"/"}>
          <Image src="/1.svg" width={25} height={25} alt="Footer Icon" />
        </Link>
        <Link href={"/"}>
          <Image src="/2.svg" width={25} height={25} alt="Footer Icon" />
        </Link>
        <Link href={"/"}>
          <Image src="/3.svg" width={25} height={25} alt="Footer Icon" />
        </Link>
        <Link href={"/"}>
          <Image src="/4.svg" width={25} height={25} alt="Footer Icon" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
