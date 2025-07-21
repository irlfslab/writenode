import { Link } from "react-router"

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="" alt="" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <button className="auth">Login</button>
      </nav>
    </header>

    
  )
}
