const { gql } = require('apollo-server-express');;

const typeDefs = gql`

    type User {
        _id: ID
        username: String!
        email: String!
        instaUsername: String!
        instaPassword: String!
        posts: [Post]
    }

    type Post {
        _id: ID
        caption: String!
        title: String!
        imageFile: String!
        time: String
        date: String
        interval: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input PostInput {
        _id: ID
        caption: String!
        title: String!
        imageFile: String!
        time: String
        date: String
        interval: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String, email: String!, password: String!, instaUsername: String!, instaPassword: String!): Auth
        savePost(postData: PostInput!, instaPassword: String!): User
        removePost(_id: ID!): User
        editPost(postData: PostInput!): User
    }
`;

module.exports = typeDefs;