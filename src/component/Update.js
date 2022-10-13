import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { db } from "../firebase";
import {
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";

const Create = () => {
    const [blog, setBlog] = useState({ title: "", body: "", author: "" });
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    //fteching blog
    const { id } = useParams();
    useEffect(async () => {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setBlog(docSnap.data());
        } else {
            console.log("No such document!");
        }

    }, [])

    //update blog
    const valueHandler = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        setIsPending(true);
        e.preventDefault();
        const blogDocRef = doc(db, "blogs", id);
        try {
            await updateDoc(blogDocRef, {
                title: blog.title,
                body: blog.body,
                author: blog.author,
            });

            history.push("/");
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div className="create">
            {id && (
                <form onSubmit={handleUpdate}>
                    <h2>Update The Blog</h2>
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

                    {!isPending && <button>Update Blog</button>}
                    {isPending && <button disabled>updating....</button>}
                </form>
            )}
        </div>
    );
};

export default Create;
