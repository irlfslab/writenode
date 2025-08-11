import { addDoc, collection } from "firebase/firestore";
import { db, auth} from "../firebase/config";

export const CreatePost = () => {
  async function handleCreatePost(event) {
    event.preventDefault();
    const document = {
      title: "ABC",
    }
  }
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required/> 
        <textarea type="text" className="description" name="description" placeholder="Description" maxLength="600" required></textarea>
        <button type="submit" className="submit">Create</button>
      </form>
    </section>
  )
}
