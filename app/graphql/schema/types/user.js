//const { buildSchema } = require("graphql");

module.exports = `
    type User{
        userId: ID!
        userType: String!
        user: String!
    }

    type Query {
        getUser: [User]
    }
    
`;