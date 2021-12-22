const { mergeTypeDefs } = require('@graphql-tools/merge');

const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')

const typesArray = loadFilesSync(path.join(__dirname, './types'))

module.exports = mergeTypeDefs(typesArray)

// const expenseSchema = require("./types/expense");
// const userSchema = require('./types/user');

// module.exports = mergeTypeDefs([expenseSchema,userSchema]);
