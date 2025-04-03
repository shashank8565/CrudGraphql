import { getUsers } from "./../../controllers/graphql";
export const graphQLSchema = `#graphql

type Query {
    hello: String
    Users:[users]
    UsersId(id:ID!):users

    

}

type Mutation {
    addPost(title: String!, content: String!): Post
    addUser(name:String!,email:String!,password:String!) : users
    updateUser(id:ID!,name:String!,email:String!,password:String!) :users
    deleteUser(id:ID!):users
}

type Post {
    title: String
    content: String
}

type users {
    name:String!
    email:String!
    password:String!

}


`;
