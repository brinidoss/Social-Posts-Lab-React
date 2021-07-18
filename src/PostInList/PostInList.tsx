import './PostInList.css';
import Post from '../interfaces/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
    post: Post;
    onDelete: () => void;
}

function PostInList({post, onDelete}: Props) {
    return (
        <div className="PostInList">
            <div className="single-post-container">
                <div className="title-and-thought">
                    <p className="title-container">{post.title}</p>
                    <p className="thought-container">{post.thought}</p>
                </div>
                <div className="trash-container" onClick={ onDelete }>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

export default PostInList;