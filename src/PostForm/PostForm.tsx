import './PostForm.css';
import Post from '../interfaces/Post';
import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons';


interface Props {
    onSubmit: (post: Post) => void;
    onClose: () => void;
};

function PostForm({onSubmit, onClose}: Props) {
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
            <FontAwesomeIcon icon={faTimesCircle} className="close-icon" onClick={ onClose }/>
            <label htmlFor="form-title">Title</label>
            <input type="text" name="form-title" id="form-title" value={title} onChange={ (e) => setTitle(e.target.value) }/>
            <label htmlFor="form-thought">Thought</label>
            <textarea name="form-thought" id="form-thought" rows={4} cols={50} value={thought} onChange={ (e) => setThought(e.target.value) }/>
            <button type="submit" className="add-post-button">Add Post</button>
        </form>
    );
}

export default PostForm;