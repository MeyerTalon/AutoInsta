const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = User.findOne({ _id: context.user._id }).select('-__v -password').populate('posts');
                return userData;
            }
            throw new AuthenticationError("Must be logged in.");
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("Invalid credentials.");
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Invalid credentials.");
            }
            const token = signToken(user);
            return { token, user };
        },
        savePost: async (parent, { postData }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { posts: postData }},
                    { new: true },
                ).populate('posts');
                return updatedUser;
            }
            throw new AuthenticationError("Must be logged in.");
        },
        removePost: async (parent, { postId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { posts : { _id: postId }}},
                    { new: true }
                ).populate('posts');;
                return updatedUser;
            }
            throw new AuthenticationError("Must be logged in.");
        },
        editPost: async (parent, { postData }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { posts : { _id: postData._id }}},
                    { $addToSet: { posts: postData }},
                    { new: true },
                ).populate('posts');
                return updatedUser;
            }
            throw new AuthenticationError("Must be logged in.");
        },
    }
};

module.exports = resolvers;