import BlogList from "./BlogList";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  // const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);


  //ferching blogs from firestore
  useEffect(() => {

    const q = query(collection(db, 'blogs'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setBlogs(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
      setIsPending(false);
    })
  }, [])



  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {isPending && <div> Loading....</div>}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.data.author === 'Hasan')} title="Hasan's Blogs" />}
      {isPending && <div> Loading....</div>}
    </div>
  );
};

export default Home;
