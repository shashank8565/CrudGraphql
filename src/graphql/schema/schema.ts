export const graphQLSchema = `#graphql

type Query {
    hello: String
    Users:[users]

}

type Mutation {
    addPost(title: String!, content: String!): Post
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
