import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("http://127.0.0.1:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
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
}
