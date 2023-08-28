import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import SinglePostViewContainer from './components/Blog/SinglePostViewContainer';
import PostForm from './components/Blog/PostForm';
import Home from './components/Blog/Dashboard';


const App = () =>{
const [posts, setPosts] = useState([]);

  useEffect(() => {   // Load posts from local storage on app load
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setPosts(storedPosts);
  }, []);

  useEffect(() => {  // Save posts to local storage whenever posts are updated
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
     
      <Router>
      <Header/>

        <Switch>
          <Route exact path="/">
            <Home posts={posts} />
          </Route>
          <Route path="/new">
            <PostForm addPost={handleAddPost} />
          </Route>
          <Route path="/post/:postId">
            <SinglePostViewContainer posts={posts} setPosts={setPosts} />
          </Route>
        </Switch>

      </Router>

    </div>


  );
}

export default App;