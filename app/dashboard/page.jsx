"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import Loading from "./loading";
import styles from "./page.module.css";

const Page = () => {
  const { data: session, status } = useSession();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.user.name}`,
    fetcher
  );
  console.log("data:", data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.user.name,
          userImage: session.user.image,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

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
      <div className={styles.posts}>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt="POST IMAGE" fill />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                className={styles.delete}
                onClick={() => handleDelete(post._id)}
              >
                Delete
              </span>
            </div>
          ))
        )}
        {data?.length === 0 && <h1>No Posts</h1>}
      </div>

      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Page;
