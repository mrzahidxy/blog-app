import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

  return (

    <div className="blog-list">
      <h2>{title}</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>

          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <h5>Written by {blog.author}</h5>
          </Link>
          
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  )
};

export default BlogList;
