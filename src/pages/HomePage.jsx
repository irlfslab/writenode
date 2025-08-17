import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config"
import { PostCard } from "../components";

export const HomePage = () => {
  /** 
  const posts = [
    {id: 1, title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, illum.", author: "User1"},
    {id: 2, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit, amet consectetur", author: "User1"}
  ]
    **/
   const [posts, setPosts] = useState([]);
   const [toggle, setToggle] = useState(false);
   const postsRef = useRef(collection(db, "posts"));
   useEffect(() => {
      async function getPosts() {
        const data = await getDocs(postsRef);
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
        <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
      ))}
    </section>
  )
}
