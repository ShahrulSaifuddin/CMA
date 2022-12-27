import React, { useState, useEffect, useCallback } from "react";
import { useRouteMatch } from "react-router-dom";
import "./commentScreen.scss";

function CommentsScreen() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const routeMatch = useRouteMatch("/post/:id");
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
    setPost(responses[0]);
    setComments(responses[1]);
  }, []);

  useEffect(() => {
    getPostComments();
  }, [getPostComments]);

  useEffect(() => {
    setFilteredComments(
      comments.filter((comment) => {
        return (
          comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.body.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }, [searchTerm, comments]);

  console.log("post", post);
  // console.log('comments', comments);

  return (
    <>
      {" "}
      {isLoading ? (
        <h1>LOADING</h1>
      ) : (
        <div className="containerComment">
          <div className="header">
            <h1>{post?.title}</h1>
            <input
              type="text"
              placeholder="Search comments"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="cardComment">
            {filteredComments.map((comment) => (
              <div className="comment" key={comment.id}>
                <p>Body: {comment.body}</p>
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CommentsScreen;
