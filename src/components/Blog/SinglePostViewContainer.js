import React from 'react';
import { useParams, Route, useHistory } from 'react-router-dom';
import SinglePostView from './SinglePostView';
import EditPost from './EditPost';

const SinglePostViewContainer = ({ posts, setPosts }) => {
  const { postId } = useParams(); //this will give every post a unique Id
  const post = posts.find((post) => post.id === postId);
  const history = useHistory();

  if (!post) {
    return <p>Post not found</p>;
  }

  const handleDelete = (postToDelete) => {
    const updatedPosts = posts.filter((p) => p !== postToDelete);
    setPosts(updatedPosts);
    history.push('/');
  };

  const handleEdit = (postToEdit) => {
    history.push(`/post/${postToEdit.id}/edit`);
  };

  const handleSaveEdit = (postId, editedTitle, editedContent) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, title: editedTitle, content: editedContent }
        : post
    );
    setPosts(updatedPosts);
    history.push('/');
  };

  return (
    <div>
      <SinglePostView
        post={post}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
       <Route path={`/post/${post.id}/edit`}>
        <EditPost post={post} onSave={handleSaveEdit} />
      </Route>
    </div>
  );
}

export default SinglePostViewContainer;
