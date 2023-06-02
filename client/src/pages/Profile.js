import React from "react";
import { removePostId } from "../utils/localStorage";
import Auth from "../utils/auth";
import { GET_ME } from "../utils/queries"
import {useQuery , useMutation} from "@apollo/client"
import { REMOVE_POST } from '../utils/mutations';


function ProfilePage() {

    const {loading, data} = useQuery(GET_ME)
    const userData = data?.me||{};

    const [removePost, { error }] = useMutation(REMOVE_POST);
  const handleDeletePost = (postId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

   

    const handleDeletePost = async (PostId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          const { data } = await removePost({
            variables: { PostId }
          });
          // upon success, remove book's id from localStorage
          removePostId(PostId);
        } catch (err) {
          console.error(err);
        }
      };

    if (!token) {
      return false;
    }

    try {
      // Remove the post's ID from the userData.posts array
      const updatedPosts = [];
      for (const post of userData.posts) {
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
      {userData.posts && userData.posts.length > 0 ? (
        <div className="posts-container">
          {userData.posts.map((post, index) => (
            <div className="post" key={index}>
              <h3>{post.title}</h3>
              <p>{post.caption}</p>
              {post.image && <img src={post.image} alt="Post Image" />}
              <p>Date: {post.date}</p>
              <p>Time: {post.time}</p>
              <p>Interval: {post.interval}</p>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              <button className='btn-block btn-danger' onClick={() => handleDeletePost(userData.postId)}>
                      Delete this Post!
                    </button>
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
