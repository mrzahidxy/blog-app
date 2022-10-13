import {useState } from "react";
import { useHistory} from "react-router";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const Create = () => {
  const [blog, setBlog] = useState({ title: "", body: "", author: "" });
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  // add new blog to firestore
  const valueHandler = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsPending(true);
      await addDoc(collection(db, "blogs"), {
        title: blog.title,
        body: blog.body,
        author: blog.author,
        created: Timestamp.now(),
      });
      setIsPending(false);
      history.push("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Create A New Blog</h2>
        <label>Title</label>
        <input
          type="text"
          required
          name="title"
          value={blog.title}
          onChange={valueHandler}
        />
        <label>Body</label>
        <textarea
          required
          name="body"
          value={blog.body}
          onChange={valueHandler}
        ></textarea>
        <label>Author</label>
        <input
          type="text"
          required
          name="author"
          value={blog.author}
          onChange={valueHandler}
        />

        {!isPending && <button>Create Blog</button>}
        {isPending && <button disabled>creating....</button>}
      </form>
    </div>
  );
};

export default Create;
