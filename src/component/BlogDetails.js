import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { db } from "../firebase";

// import useFetch from "../useFetch";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();

  //fteching blog
  const { id } = useParams();
  useEffect(async () => {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setBlog(docSnap.data());
      setIsPending(false);
    } else {
      setError(true);
    }
  }, []);

  // deleting blog
  const handleDelete = async () => {
    const blogDocRef = doc(db, 'blogs', id)
    try {
      await deleteDoc(blogDocRef);
      history.push("/");
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="blog-details">
      {isPending && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <h3>written by {blog.author}</h3>
          <p>{blog.body}</p>
        </article>
      )}

      <button onClick={handleDelete}>Delete</button>
      <Link to={`/update/${id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default BlogDetails;
