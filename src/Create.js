import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }


    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <h2>Create New Blog.</h2>
                <label>Title</label>
                <input type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <input type='text'
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                {!isPending && <button>Add New Blog</button>}
                {isPending && <button disabled>Adding....</button>}

            </form>

            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <h3>{author}</h3>
            </div>

        </div>

    );
}

export default Create;