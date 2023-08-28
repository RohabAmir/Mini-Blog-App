
import React, { useState } from 'react';
import './SinglePostViewContainer.css';

const EditPost = ({ post, onSave }) => {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleSave = () => {
    onSave(post.id, editedTitle, editedContent);
  };

  return (
   
    <div className="edit-post">
      <h2>Edit Post</h2>
      <div>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      </div>
      <div>
      <textarea rows={3}
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      </div>
      <button 
        style={{ 
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '7px',
        cursor: 'pointer'}} 

      onClick={handleSave}>Save</button>
    </div>
  
  );
}

export default EditPost;
