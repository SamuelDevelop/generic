"use client"
import { getMockPosts } from "@/services/mockData";
import styles from "./FeedSection.module.css"
import Posts from "../Post/Posts";
import PostProps from "@/types/PostProps";
import { useEffect, useState } from "react";
import FeedNavigation from "../FeedNavagation/FeedNavigation";

function FeedSection() {
  const [feedPosts, setFeedPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const posts = await getMockPosts();
      setFeedPosts(posts);
    }

    loadPosts();
  }, []);

  return (
    <section className={styles.feedSection}>
      {
        <section>
          <Posts posts={feedPosts} />
          <FeedNavigation />
        </section>
      }
    </section>
  );
}

export default FeedSection;