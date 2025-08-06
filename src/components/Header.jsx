import { Link, NavLink} from "react-router";  
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png"

export const Header = () => {
  const isAuth = true;
  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    })
  }
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link">Home</NavLink>
        { isAuth ? (
          <>
          <NavLink to="/create" className="link">Create</NavLink> 
          <button className="auth"><i className="bi bi-box-arrow-right"></i>Logout</button> 
          </>
        ) : (
        <button onClick={handleLogin} className="auth"><i className="bi bi-google"></i>Login</button>
        ) }
       
      </nav>
    </header>

    
  )
}
