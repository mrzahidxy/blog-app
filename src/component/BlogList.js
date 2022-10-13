import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {


  return (

    <div className="blog-list">
      <h2>{title}</h2>

      {blogs && blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.data.title}</h3>
            <h5>Written by {blog.data.author}</h5>
          </Link>
          <p>{blog.data.body}</p>
        </div>
      ))}
    </div>
  )
};

export default BlogList;
