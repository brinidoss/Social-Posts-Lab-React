import './SocialPosts.css';
import Post from '../interfaces/Post';
import PostInList from '../PostInList/PostInList';
import { useState } from 'react';
import PostForm from '../PostForm/PostForm';
import Modal from 'react-modal';

function SocialPosts() {
    let [socialPosts, setSocialPosts] = useState([
        {
            title: 'Couch',
            thought: 'Such comfy',
        },
        {
            title: 'Doge',
            thought: 'Wow!',
        },
        {
            title: 'Treat',
            thought: 'Very joy',
        },
        {
            title: 'Vet',
            thought: 'So scare',
        }
    ]);

    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleDelete(index: number) {
        setSocialPosts(prevSocialPosts => [...prevSocialPosts.slice(0, index), ...prevSocialPosts.slice(index+1)]);
    };

    function handleAdd(formPost: Post) {
        setSocialPosts(prevSocialPosts => [formPost, ...prevSocialPosts]);
        closeModal();
    };

    function handleClose() {
        closeModal();
    }

    function handleUpVote(index: number) {
       if (index > 0) {
           setSocialPosts(prevSocialPosts => [...prevSocialPosts.slice(0, index-1), ...prevSocialPosts.slice(index, index+1), ...prevSocialPosts.slice(index-1, index), ...prevSocialPosts.slice(index+1)]);
       }
    }


    

    return (
        <div className="SocialPosts">
            <h1>Doge Thoughts</h1>
            <div className="thought-button-container">
                <button className="thought-button" onClick={openModal}>New Thought</button>
            </div>
            <div className="posts-container">
                {socialPosts.map((socialPost, index) =>
                <PostInList 
                    key={socialPost.title}
                    post={socialPost}
                    onDelete={ () => handleDelete(index) }
                    onUpVote={() => handleUpVote(index)}
                />
                )}
            </div>
            <Modal
                isOpen={modalIsOpen}
                className="Modal"
            >
                <PostForm onSubmit={handleAdd} onClose={handleClose}/>
            </Modal>
        </div>
    )
}

export default SocialPosts;