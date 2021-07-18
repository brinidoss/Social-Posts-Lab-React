import './PostInList.css';
import Post from '../interfaces/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Props {
    post: Post;
    onDelete: () => void;
    onUpVote: () => void;
}

function PostInList({post, onDelete, onUpVote}: Props) {
    const [vote, setVote] = useState(0);
    
    return (
        <div className="PostInList">
            <div className="single-post-container">
                <div className="title-and-thought">
                    <p className="title-container">{post.title}</p>
                    <p className="thought-container">{post.thought}</p>
                    <div className="reactions">
                        <div className="upvote-container">
                            <button className="upvote" onClick={ (e) => setVote(vote+1) }>Wow!</button>
                            <p className='upvote-text' style= {vote < 1 ? {display: 'none'} : {visibility: 'visible'}}>X {vote}</p>
                        </div>
                    </div>
                </div>
                <div className="trash-container" onClick={ onDelete }>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
            
        </div>
    )
}

export default PostInList;