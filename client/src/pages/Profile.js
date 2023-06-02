import React from "react";
import { removePostId } from "../utils/localStorage";
import Auth from "../utils/auth";

function ProfilePage({ createdPosts }) {
  const handleDeletePost = (postId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // Remove the post's ID from the createdPosts array
      const updatedPosts = [];
      for (const post of createdPosts) {
        if (post.id !== postId) {
          updatedPosts.push(post);
        }
      }

      // Update the component state or trigger any necessary update in the parent component
      // to reflect the updated list of created posts

      // Remove the post's ID from localStorage
      removePostId(postId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>My Posts</h2>
      {createdPosts && createdPosts.length > 0 ? (
        <div className="posts-container">
          {createdPosts.map((post, index) => (
            <div className="post" key={index}>
              <h3>{post.title}</h3>
              <p>{post.caption}</p>
              {post.image && <img src={post.image} alt="Post Image" />}
              <p>Date: {post.date}</p>
              <p>Time: {post.time}</p>
              <p>Interval: {post.interval}</p>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No posts found.</p>
      )}
    </div>
  );
}

export default ProfilePage;
