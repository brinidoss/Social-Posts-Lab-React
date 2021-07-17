import './PostInList.css';
import Post from '../interfaces/Post';

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
                <div className="trash-container" onClick={ onDelete }>trash</div>
            </div>
        </div>
    )
}

export default PostInList;