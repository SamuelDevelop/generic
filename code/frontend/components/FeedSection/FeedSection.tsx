"use client"
import { getMockPosts } from "@/services/mockData";
import Button from "../Button/Button";
import TwoPartSection from "../TwoPartSection/TwoPartSection";
import styles from "./FeedSection.module.css"
import pinkImage from "@/assets/images/landscape_photos/pink_tree.jpg"
import Posts from "../Post/Posts";
import PostProps from "@/types/PostProps";
import { useEffect, useState } from "react";
import FeedNavigation from "../FeedNavagation/FeedNavigation";

function FeedSection({ userHaveProfile }: FeedSectionProps) {
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
        userHaveProfile ? (
          <section>
            <Posts posts={feedPosts} />
            <FeedNavigation />
          </section>
        ) : (
          <section>
            <TwoPartSection image={pinkImage}>
              <h1>Crie um perfil Generic!</h1>
              <p>Você tem uma conta mas ainda não possui um perfil Generic</p>
              <Button variant="comum">Crie Agora</Button>
            </TwoPartSection>
          </section>
        )
      }
    </section>
  );
}

export default FeedSection;