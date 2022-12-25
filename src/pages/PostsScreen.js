import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    const id = e.currentTarget.getAttribute('value');
    console.log(id);

    history.push(`/post/${id}`);

  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} value={post.id} onClick={handlePostOnClick}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsScreen;
