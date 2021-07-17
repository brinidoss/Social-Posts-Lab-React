import './PostForm.css';
import Post from '../interfaces/Post';
import { FormEvent, useState } from 'react';

interface Props {
    onSubmit: (post: Post) => void;
};



function PostForm({onSubmit}: Props) {
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');

function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
        title,
        thought
    });
    setTitle('');
    setThought('');
}

    return (
        <form className="PostForm" onSubmit={ handleSubmit }>
            <label htmlFor="form-title">Title</label>
            <input type="text" name="form-title" id="form-title" value={title} onChange={ (e) => setTitle(e.target.value) }/>
            <label htmlFor="form-thought">Thought</label>
            <input type="text" name="form-thought" id="form-thought" value={thought} onChange={ (e) => setThought(e.target.value) }/>
            <button type="submit">Add Post</button>
        </form>
    );
}

export default PostForm;