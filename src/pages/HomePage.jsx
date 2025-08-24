import { useEffect, useState, useRef } from "react";
import { useTitle} from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config"
import { PostCard, SkeletonCard } from "../components";

export const HomePage = () => {
  /** 
  const posts = [
    {id: 1, title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, illum.", author: "User1"},
    {id: 2, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit, amet consectetur", author: "User1"}
  ]
    **/
   const [posts, setPosts] = useState([false, false, false]);
   const [toggle, setToggle] = useState(false);
   useTitle("Home");
   const postsRef = useRef(collection(db, "posts"));
   useEffect(() => {
      async function getPosts() {
        const data = await getDocs(postsRef.current);
        console.log(data.docs);
        setPosts(data.docs.map((document) => (
          {...document.data(), id: document.id})));
      }
      console.log("---")
      getPosts(); 
   },[postsRef, toggle]);

  return (
    <section>
      { posts.map(post => (
        post ? (
        <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ) : (
          <SkeletonCard />
        )
      ))}
    </section>
  )
}
