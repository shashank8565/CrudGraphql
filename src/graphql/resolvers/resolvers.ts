import { getUsers, helloWord, newPost } from "./../../controllers/graphql";

export const graphQLResolver = {
  Query: {
    hello: helloWord,
    Users: getUsers,
  },
  Mutation: {
    addPost: newPost,
  },
};
