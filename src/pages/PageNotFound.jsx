import PageNotFound from "../assets/images/page-not-found.jpg"
export const PageNotFound = () => {
  return (
    <section className="pageNotFound">
      <p>404 / Page Not found</p>
      <img src={PageNotFound} alt="Page Not Found" />
    </section>
  )
}
