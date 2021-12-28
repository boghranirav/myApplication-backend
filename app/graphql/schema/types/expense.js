module.exports = `
    type Category{
        categoryId: ID!
        categoryType: String!
        categoryValue: String!
    }

    input CreateCategory {
        categoryType: String!
        categoryValue: String!
    }
    
    input UpdateCategory {
        categoryId: ID!
        categoryType: String!
        categoryValue: String!
    }

    type RootQuery {
        getCategorys: [Category]
        getCategory(categoryId: ID!): Category
    }

    type RootMutation {
        createNewCategory(createCategory: CreateCategory!):Category
        updateCategory(updateCategory: UpdateCategory!):Category!
        deleteCategory(categoryId: ID!):Category!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`;
