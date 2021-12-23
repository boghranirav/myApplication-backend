
module.exports = `
    type Category{
        categoryId: ID!
        categoryType: String!
        category: String!
    }

    input CreateCategory {
        categoryType: String!
        category: String!
    }
    
    input UpdateCategory {
        categoryId: ID!
        categoryType: String!
        category: String!
    }

    type RootQuery {
        getCategorys: [Category]
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