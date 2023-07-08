import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

async function getData() {
  const response = await fetch("http://127.0.0.1:3000/api/posts", {
    cache: "no-store",
  });
  if (!response.ok) {
    return notFound();
  }
  const data = await response.json();
  return data;
}

const Page = async () => {
  const posts = await getData();

  return (
    <div className={styles.mainContainer}>
      {posts.map((post) => (
        <Link
          href={`/blog/${post._id}`}
          className={styles.container}
          key={post.id}
        >
          <div className={styles.gridContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={post.img}
                alt={post.title}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.desc}>{post.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
