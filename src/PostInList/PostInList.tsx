import './PostInList.css';
import Post from '../interfaces/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { ReactionBarSelector } from '@charkour/react-reactions';
import doge from '../reactions/doge.png';
import cheems from '../reactions/cheems.jpeg';
import swole from '../reactions/swole.png';

interface Props {
    post: Post;
    onDelete: () => void;
    onUpVote: () => void;
}

interface Reaction {
    label: string;
    node: any;
}

   
function PostInList({post, onDelete, onUpVote}: Props) {
    const [vote, setVote] = useState(0);
    const [emojiSelector, setEmojiSelector] = useState(false);
    const [dogeReact, setDogeReact] = useState(false);
    const [cheemsReact, setCheemsReact] = useState(false);
    const [swoleReact, setSwoleReact] = useState(false);
    
    const reactions: Reaction[] = [
        {
            label: 'doge',
            node: <img height={30} src={doge} alt="Doge"/>
        },
        {
            label: 'cheems',
            node: <img height={30} src={cheems} alt="Cheems"/>
        },
        {
            label: 'swole',
            node: <img height={30} src={swole} alt="Swole"/>
        }
    ]

   
function handleSelect(label: string) {
    if (label === 'doge') {
        setDogeReact(true);
    } else if (label === 'cheems') {
        setCheemsReact(true);
    } else if (label === 'swole') {
        setSwoleReact(true);
    }
}    

    return (
        <div className="PostInList">
            <div className="single-post-container">
                <div className="title-and-thought">
                    <p className="title-container">{post.title}</p>
                    <p className="thought-container">{post.thought}</p>
                    <div className="reactions">
                        <div className="upvote-container">
                            <button className="upvote" onClick={ (e) => {setVote(vote+1); onUpVote()}} >Wow!</button>
                            <p className='upvote-text' style= {vote < 1 ? {display: 'none'} : {visibility: 'visible'}}> {vote}</p>
                        </div> 
                        <div className="reactions-container">
                            <FontAwesomeIcon icon={faGrinAlt} className="emoji-icon" onClick={() => setEmojiSelector(!emojiSelector)}/>
                                <div className={emojiSelector ? "ReactionBarSelector_Active" : "ReactionBarSelector_Idle"}>
                                    <ReactionBarSelector reactions={reactions} onSelect={handleSelect}/>
                                </div>
                                <div className="selected-reactions">
                                    <img height={30} src={doge} alt="Doge" style= {dogeReact ? {visibility: 'visible'} : {display: 'none'} } onClick={() => setDogeReact(false)}/>
                                    <img height={30} src={cheems} alt="Cheems" style= {cheemsReact ? {visibility: 'visible'} : {display: 'none'}} onClick={() => setCheemsReact(false)}/>
                                    <img height={30} src={swole} alt="Swole" style= {swoleReact ? {visibility: 'visible'} : {display: 'none'}} onClick={() => setSwoleReact(false)}/>
                                </div>
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