import React, { useState, useEffect, useCallback } from "react";
import { useRouteMatch } from "react-router-dom";

function CommentsScreen() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const routeMatch = useRouteMatch("/post/:id");

  console.log("routeMatch", routeMatch);

  const getPostComments = useCallback(async () => {
    const post_id = routeMatch?.params?.id;
    console.log("post_id", post_id);
    const responses = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then(
        (res) => res.json()
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`
      ).then((res) => res.json()),
    ]);

    setPost(responses[0]);
    setComments(responses[1])
    
  }, []);

  useEffect(() => {
    getPostComments();
  }, [getPostComments]);

  console.log('post', post);
  // console.log('comments', comments);

  return (
    <div>
      <h1>{post?.title}</h1>
      
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.body}</p>
          <p>By {comment.name}</p>
          <p>Email: {comment.email}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsScreen;
