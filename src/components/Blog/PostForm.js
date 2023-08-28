import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Aux from '../../Aux';
import './PostForm.css';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      title:title,
      content: content,
      date: new Date().getTime(),
    };
    addPost(newPost);
    history.push('/');
  };

  return (
    <Aux>
      <h2 style={{textAlign:'center' , color:'darkgoldenrod' , marginTop:'10px'}}>Create a new post!</h2>
      <section className='post-form'>
      
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                <label>Title:</label>
                <input
                    type="text" 
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value)}
                    }
                    required
                />
                </div>
                <div className='form-control'>
                <label>Content:</label> 
                <textarea rows={3}
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value)}
                    }
                    required
                />
                </div>
                <div className='post-button'>
                <button type="submit">Create Post</button>
                </div>
            </form>
      
    </section>
    </Aux>
  );
};

export default PostForm;
