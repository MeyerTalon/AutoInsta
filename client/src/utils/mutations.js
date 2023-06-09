import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $instaUsername: String!, $instaPassword: String!) {
        addUser(username: $username, email: $email, password: $password, instaUsername: $instaUsername, instaPassword: $instaPassword) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_POST = gql`
    mutation savePost($postData: PostInput!, $instaPassword: String!) {
        savePost(postData: $postData, instaPassword: $instaPassword) {
            username
            email
            posts {
              _id
              caption
              title
              imageFile
              date 
              time
              interval
            }
        }
    }
`;

export const REMOVE_POST = gql`
    mutation removePost($postId: ID!) {
        removePost(_id: $postId) {
            username
            email
            posts {
              _id
              caption
              title
              imageFile
              date 
              time
              interval
            }
        }
    }
`;

export const EDIT_POST = gql`
    mutation savePost($postData: PostInput!) {
        savePost(postData: $postData) {
            username
            email
            posts {
              _id
              caption
              title
              imageFile
              date 
              time
              interval
            }
        }
    }
`;