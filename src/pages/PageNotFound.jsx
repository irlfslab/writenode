import {Link} from "react-router";
import { useTitle} from "../hooks/useTitle";
import NotFound from "../assets/page-not-found.jpg";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <section className="pageNotFound">
      <p>404 / Page Not found</p>
      <img src={NotFound} alt="Page Not Found" />
      <Link to ="/">
        <button>Back to Home</button>
      </Link>
    </section>
  )
}
