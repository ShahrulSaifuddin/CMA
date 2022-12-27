import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./postScreen.scss";

function PostsScreen() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      // console.log(data);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const handlePostOnClick = (e) => {
    // console.log(e.currentTarget);
    const id = e.currentTarget.getAttribute("value");
    console.log(id);

    history.push(`/post/${id}`);
  };

  return (
    <div className="container">
      {posts.map((post) => (
        <div
          className="card"
          key={post.id}
          value={post.id}
        >
          <div className="face face1">
            <div className="content">
              <h2>{post.title}</h2>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>{post.body}</p>
              <a href="#" onClick={handlePostOnClick} value={post.id}>Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsScreen;
