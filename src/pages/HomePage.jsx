import { PostCard } from "../components";

export const HomePage = () => {
  const posts = [
    {id: 1, title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, illum.", author: "User1"},
    {id: 2, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit, amet consectetur", author: "User1"}
  ]
  return (
    <section>
      { posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  )
}
