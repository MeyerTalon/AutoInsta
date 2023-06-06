import React from "react";
import { removePostId } from "../utils/localStorage";
import Auth from "../utils/auth";
import { GET_ME } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_POST } from "../utils/mutations";
import { gql } from "@apollo/client";

function ProfilePage() {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const [removePost, { error }] = useMutation(REMOVE_POST, {
    update(cache, { data: { removePost } }) {
      // Remove the post from the cache after successful deletion
      cache.modify({
        id: cache.identify(userData),
        fields: {
          posts(existingPosts = []) {
            const newPosts = existingPosts.filter(
              (postRef) => postRef.__ref !== cache.identify(removePost)
            );
            return newPosts;
          },
        },
      });
    },
  });

  const handleDeletePost = async (postId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removePost({
        variables: { postId },
      });

      // Remove the post's ID from localStorage
      removePostId(postId);
    } catch (err) {
      console.error(err);
    }
  };

  //Comment for push

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", fontFamily: "'Tsukimi Rounded', sans-serif" }}>
        My Posts
      </h2>
      <style>
        {`
          .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 20px;
            justify-items: center;
          }
        `}
      </style>
      <div className="card-container">
        {userData.posts && userData.posts.length > 0 ? (
          userData.posts.map((post) => (
            <div className="card" key={post._id}>
              <div className="card-image">
                {post.imageFile && <img src={post.imageFile} alt="Post Image" />}
                <span className="card-title">{post.title}</span>
                <a
                  className="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={() => handleDeletePost(post._id)} // Pass postId to handleDeletePost
                >
                  <i className="material-icons">X</i>
                </a>
              </div>
              <div className="card-content">
                <p>Title: {post.title}</p>
                <p>Caption: {post.caption}</p>
                <p>Date: {post.date}</p>
                <p>Time: {post.time}</p>
                <p>Interval: {post.interval}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
