import { useNavigate } from "react-router";
import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const PostCard = ({post, toggle, setToggle}) => {
    const navigate = useNavigate();
    const {id, title, desc, author} = post;
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    console.log(id);
    console.log('title', title)
    console.log('desc', desc)
    console.log('author', author.name)
    console.log('isAuth', isAuth)
    
    async function handleDelete() {
        const document = doc(db, "posts", id);
        await deleteDoc(document);
        navigate("/");
        setToggle(!toggle); 
       }
       

  return (
    <div className="card">
      {/* <p className="title">Lorem ipsum dolor sit amet.</p>
      <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ratione!</p>  */}
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <p className="control">
            {<span className="author">{author.name}</span>}
            { isAuth && (author.id === auth.currentUser.uid) && <span onClick={handleDelete} className="delete"><i className="bi bi-trash3"></i></span> }
        </p>
    </div>
  )
}

