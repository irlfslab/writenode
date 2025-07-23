export const PostCard = ({post}) => {
  const {title, description, author} = post;
  return (
    <div className="card">
      {/*
      <p className="title">Lorem ipsum dolor sit amet.</p>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ratione!</p>  */}
      <p className="title">{title}</p>
      <p className="description">{description}</p> 
      <p className="control">
        <span className="author">{author}</span>
        <span className="delete"><i className="bi bi-trash3"></i></span>
      </p>
    </div>
  )
}
