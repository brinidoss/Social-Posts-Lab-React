import './SocialPosts.css';
import Post from '../interfaces/Post';
import PostInList from '../PostInList/PostInList';
import { useState } from 'react';
import PostForm from '../PostForm/PostForm';

function SocialPosts() {
    const [socialPosts, setSocialPosts] = useState([
        {
            title: 'Cloud',
            thought: 'Such fluffy'
        },
        {
            title: 'Doge',
            thought: 'Wow!'
        },
        {
            title: 'Food',
            thought: 'So happiness'
        }
    ]);

    function handleDelete(index: number) {
        setSocialPosts(prevSocialPosts => [...prevSocialPosts.slice(0, index), ...prevSocialPosts.slice(index+1)]);
    };

    function handleAdd(formPost: Post) {
        setSocialPosts(prevSocialPosts => [...prevSocialPosts, formPost])
    };

    return (
        <div className="SocialPosts">
            <h1>Doge Thoughts</h1>
            <div className="thought-button-container">
                <button className="thought-button">New Thought</button>
            </div>
            <div className="posts-container">
                {socialPosts.map((socialPost, index) =>
                <PostInList 
                    key={socialPost.title}
                    post={socialPost}
                    onDelete={ () => handleDelete(index) }
                />
                )}
                 <div className="temporary-form-container">
                <h2>Temporary Form View for Testing</h2>
                    <PostForm onSubmit={handleAdd}/>
            </div>
            </div>
        </div>
    )
}

export default SocialPosts;