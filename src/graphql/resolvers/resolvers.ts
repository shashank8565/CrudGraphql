import {
  addUser,
  deleteUserById,
  getUsers,
  GetUsersId,
  helloWord,
  newPost,
  UpdateUserById,
} from "./../../controllers/graphql";

export const graphQLResolver = {
  Query: {
    hello: helloWord,
    Users: getUsers,
    UsersId: GetUsersId,
  },
  Mutation: {
    addPost: newPost,
    addUser: addUser,
    updateUser: UpdateUserById,
    deleteUser: deleteUserById,
  },
};
