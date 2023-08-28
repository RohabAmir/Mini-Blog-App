import React from 'react';
import Aux from '../../Aux';
import './SinglePostViewContainer.css';
import { Link } from 'react-router-dom';


const SinglePostView = ({ post, onDelete, onEdit}) => {
  return (
    <Aux>
        
            <div className="single-post-view">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p>{new Date(post.date).toLocaleDateString()}</p>
                <button 
                    style={{ 
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '7px',
                        cursor: 'pointer'}} 
                    onClick={() => onDelete(post)}>Delete</button>
                <button 
                    style={{ 
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '7px',
                        cursor: 'pointer'}} 
                    onClick={()=> onEdit(post)}><Link to={`/post/${post.id}/edit`}></Link>Edit</button>
            </div>
    </Aux>
  );
}

export default SinglePostView;
